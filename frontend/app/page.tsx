"use client";
import { GetPostsQuery } from "@/src/gql/graphql";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardHeader,
  FormLabel,
  Typography,
} from "@mui/material";
import { graphql } from "@/src/gql";
import useSWR from "swr";
import {
  FormRenderer,
  componentTypes,
  Schema,
  FormRendererProps,
} from "@data-driven-forms/react-form-renderer";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template";

export default function Home() {
  return (
    <div className="h-screen pt-10">
      <SignedOut>
        <div>Welcome</div>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
        <SI />
      </SignedIn>
    </div>
  );
}

/** ooggie boogie **/
const q = graphql(`
  query GetPosts {
    posts {
      id
      body
      title
    }
  }
`);
// const query = `query GetUsers { users { id, name } }`
const query = `query GetPosts { posts { id, body, title } }`;

const SI = () => {
  const { getToken } = useAuth();
  const endpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API;

  type Data = {
    data: {
      users: {
        id: string;
        name: string;
      }[];
    };
  };

  const fetcher = async (url: string) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${await getToken({ template: "hasura" })}`,
      },
      body: JSON.stringify({ query }),
    }).then((res) => res.json());
  };

  const { data, isLoading, error } = useSWR<{ data?: GetPostsQuery }>(
    endpoint,
    fetcher,
  );

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

  const onSubmit: FormRendererProps<{ body: string }>["onSubmit"] = (
    values,
    api,
    onError,
  ) => console.log({ values, api, onError });

  if (isLoading) return <>loading</>;

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
        {data?.data?.posts.map((p) => (
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
