import {
  FormRenderer,
  componentTypes,
  Schema,
  FormRendererProps,
  useFormApi,
} from "@data-driven-forms/react-form-renderer";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";
import { Autocomplete, Button, Card, FormLabel } from "@mui/material";
import FormTemplateCommonProps from "@data-driven-forms/common/form-template";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
import {
  CreatePostMutation,
  CreatePostMutationVariables,
  SearchTagsQuery,
  SearchTagsQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from "@/src/gql/graphql";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useAuth } from "@clerk/nextjs";
import { CREATE_POST, GET_POSTS, SEARCH_TAGS, UPDATE_POST } from "@/gql/posts";
import { ComponentType } from "react";

export const PostForm = ({ type = "New", initialValues, after }: Props) => {
  const { posting, schema, onSubmit, updating } = usePost({
    type,
    after,
  });

  return (
    <Card className="flex justify-center p-10 my-10 w-full">
      <FormRenderer
        {...{
          FormTemplate: (props) => (
            <FormTemplate
              after={after}
              submitting={posting || updating}
              {...props}
            />
          ),
          componentMapper,
          schema,
          onSubmit,
          initialValues,
        }}
      />
    </Card>
  );
};

const FormTemplate: ComponentType<
  FormTemplateCommonProps & { submitting: boolean; after?: () => void }
> = ({ schema, formFields, submitting, after }) => {
  const { handleSubmit, getState } = useFormApi();

  const s = getState();

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {schema.title}
      <>{formFields}</>
      <FormSpy>
        {(r) => {
          return (
            <>
              <Button
                style={{ marginRight: "15px" }}
                disabled={submitting || !s.valid}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
              {after && (
                <Button onClick={after} variant="contained">
                  Cancel
                </Button>
              )}
            </>
          );
        }}
      </FormSpy>
    </form>
  );
};

type Props = {
  type?: "New" | "Edit";
  initialValues?: {
    body?: string;
    id?: string;
    title?: string;
    tags?: string[];
  };
  after?: () => void;
};

const usePost = ({ type, after }: Props) => {
  const { userId } = useAuth();

  const [createPost, { loading: posting }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST);

  const [updatePost, { loading: updating }] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(UPDATE_POST);

  const client = useApolloClient();

  const getTags = async (search: string) => {
    const res = await client.query({
      query: SEARCH_TAGS,
      variables: { _regex: search },
    });
    const ar = res.data.tags.map((t) => ({
      label: t.id,
      value: t.id,
      key: t.id,
    }));
    return ar || [];
  };

  const onSubmit: FormRendererProps<{
    tags: string[];
    body: string;
    title: string;
    id?: string;
  }>["onSubmit"] = async ({ tags, body, title, id }, api) => {
    // return
    type === "New"
      ? createPost({
          variables: {
            creator_id: userId,
            body,
            title,
            data: tags.map((tag) => ({
              tag_id: tag,
            })),
          },
          refetchQueries: [GET_POSTS],
          onCompleted: () => api.reset(),
        })
      : updatePost({
          variables: {
            body,
            title,
            id,
            tags: tags.map((tag) => ({
              tag_id: tag,
              post_id: id,
            })),
          },
          refetchQueries: [GET_POSTS],
        });
    after && after();
  };

  const schema: Schema = {
    title: (
      <div className="mb-5">
        <FormLabel>{type} Post</FormLabel>
      </div>
    ),
    fields: [
      {
        classes: {
          root: "mb-10 ",
        },
        component: componentTypes.TEXT_FIELD,
        name: "title",
        label: "title",
        validate: [{ type: "required" }],
        // validateOnMount: true,
        helperText: "Title",
      },
      {
        component: componentTypes.TEXTAREA,
        name: "body",
        label: "body",
        validate: [{ type: "required" }],
        // validateOnMount: true,
        helperText: "Description",
      },
      {
        component: componentTypes.SELECT,
        noOptionsMessage: "No results",
        options: [],
        loadOptions: getTags,
        name: "tags",
        label: "tags",
        validate: [{ type: "required" }],
        // validateOnMount: true,
        helperText: "tags",
        isMulti: true,
        isSearchable: true,
        isClearable: true,
        menuIsPortal: true,
      },
    ],
  };

  return { userId, updatePost, updating, posting, onSubmit, schema };
};
