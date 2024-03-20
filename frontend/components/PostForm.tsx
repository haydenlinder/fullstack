import {
  FormRenderer,
  componentTypes,
  Schema,
  FormRendererProps,
  useFormApi,
} from "@data-driven-forms/react-form-renderer";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";
import { Button, Card, FormLabel } from "@mui/material";
import FormTemplateCommonProps from "@data-driven-forms/common/form-template";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
import {
  CreatePostMutation,
  CreatePostMutationVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from "@/src/gql/graphql";
import { useMutation } from "@apollo/client";
import { useAuth } from "@clerk/nextjs";
import { CREATE_POST, GET_POSTS, UPDATE_POST } from "@/gql/posts";
import { ComponentType } from "react";

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
        {() => (
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
        )}
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
  };
  after?: () => void;
};

export const PostForm = ({ type = "New", initialValues, after }: Props) => {
  const { userId } = useAuth();

  const [createPost, { loading: posting }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST);

  const [updatePost, { loading: updating }] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(UPDATE_POST);

  const onSubmit: FormRendererProps<{ body: string }>["onSubmit"] = async (
    values,
    api,
  ) => {
    type === "New"
      ? createPost({
          variables: {
            creator_id: userId,
            ...values,
          },
          refetchQueries: [GET_POSTS],
          onCompleted: () => api.reset(),
        })
      : updatePost({
          variables: {
            ...values,
          },
          refetchQueries: [GET_POSTS],
        });
    after && after();
  };

  const schema: Schema = {
    title: <FormLabel>{type} Post</FormLabel>,
    fields: [
      {
        component: componentTypes.TEXTAREA,
        name: "body",
        label: "body",
        validate: [{ type: "required" }],
        // validateOnMount: true,
        helperText: "What's on your mind?",
      },
    ],
  };

  return (
    <Card className="flex justify-center p-10 my-10">
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
