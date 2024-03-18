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
  InsertPostsMutation,
  InsertPostsMutationVariables,
} from "@/src/gql/graphql";
import { useMutation } from "@apollo/client";
import { graphql } from "@/src/gql";
import { useAuth } from "@clerk/nextjs";
import { GET_POSTS } from "@/gql/posts";
import { ComponentType } from "react";

const schema: Schema = {
  title: <FormLabel>New Post</FormLabel>,
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

const mutation = graphql(`
  mutation InsertPosts(
    $body: String = ""
    $creator_id: String = ""
    $title: String = ""
  ) {
    insert_posts(
      objects: { body: $body, creator_id: $creator_id, title: $title }
    ) {
      returning {
        id
      }
    }
  }
`);

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

export const PostForm = () => {
  const { userId } = useAuth();

  const [mutate, { loading: posting }] = useMutation<
    InsertPostsMutation,
    InsertPostsMutationVariables
  >(mutation);

  const onSubmit: FormRendererProps<{ body: string }>["onSubmit"] = async (
    values,
    api,
  ) => {
    mutate({
      variables: {
        creator_id: userId,
        ...values,
      },
      refetchQueries: [GET_POSTS],
      onCompleted: () => api.reset(),
    });
  };

  return (
    <FormRenderer
      {...{
        FormTemplate: (props) => (
          <FormTemplate submitting={posting} {...props} />
        ),
        componentMapper,
        schema,
        onSubmit,
      }}
    />
  );
};
