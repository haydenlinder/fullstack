import { graphql } from "@/src/gql";

import {
  Card,
  CardContent,
  CardHeader,
  FormLabel,
  Typography,
} from "@mui/material";

import {
  FormRenderer,
  componentTypes,
  Schema,
  FormRendererProps,
} from "@data-driven-forms/react-form-renderer";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";

import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template";
import { useMutation, useQuery } from "@apollo/client";
import {
  GetPostsQuery,
  InsertPostsMutation,
  InsertPostsMutationVariables,
} from "../gql/graphql";
import { useAuth } from "@clerk/nextjs";

const query = graphql(`
  query GetPosts {
    posts {
      id
      body
      title
    }
  }
`);

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

export const Posts = () => {
  const { data, loading, error } = useQuery<GetPostsQuery>(query);
  const { userId } = useAuth();
  const [mutate] = useMutation<
    InsertPostsMutation,
    InsertPostsMutationVariables
  >(mutation);

  const onSubmit: FormRendererProps<{ body: string }>["onSubmit"] = (
    values,
    api,
    onError,
  ) => {
    mutate({
      variables: {
        creator_id: userId,
        ...values,
      },
      refetchQueries: [query],
    });
  };

  if (loading) return <>loading</>;

  return (
    <>
      <Card className="w-96 flex justify-center p-10 my-10">
        <FormRenderer
          {...{
            FormTemplate,
            componentMapper,
            schema,
            onSubmit,
          }}
        />
      </Card>
      <>
        {data?.posts.map((p) => (
          <Card key={p.id} className="w-96 flex justify-center p-10 my-10">
            <CardHeader></CardHeader>
            <CardContent>
              <Typography fontSize={24}>{p.title}</Typography>
              <Typography>{p.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </>
    </>
  );
};
