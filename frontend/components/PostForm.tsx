import {
  FormRenderer,
  componentTypes,
  Schema,
  FormRendererProps,
  useFormApi,
} from "@data-driven-forms/react-form-renderer";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";
import { Button, FormLabel } from "@mui/material";
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
  FormTemplateCommonProps & { submitting: boolean }
> = ({ schema, formFields, submitting }) => {
  const { handleSubmit, getState } = useFormApi();

  const s = getState();

  return (
    <form onSubmit={handleSubmit}>
      {schema.title}
      <>{formFields}</>
      <FormSpy>
        {() => (
          <Button
            disabled={submitting || !s.valid}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
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
    console.log({ initialValues, values, type });
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
          onCompleted: after,
        });
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
    <FormRenderer
      {...{
        FormTemplate: (props) => (
          <FormTemplate submitting={posting || updating} {...props} />
        ),
        componentMapper,
        schema,
        onSubmit,
        initialValues,
      }}
    />
  );
};
