'use client'
import { GetPostsQuery } from "@/src/gql/graphql";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { Button, FormControl, TextField } from "@mui/material";
import { graphql } from "@/src/gql";
import useSWR from 'swr';
 
export default function Home() {
  return (
    <div className="h-screen">
      <SignedOut>
        <div>Welcome</div>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
        <SI/>
      </SignedIn>
    </div>
  )
}

/** ooggie boogie **/
const q = graphql(`query GetPosts { posts { id, body, title } }`)
// const query = `query GetUsers { users { id, name } }`
const query = `query GetPosts { posts { id, body, title } }`

const SI = () => {
  const { getToken } = useAuth();
  const endpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API;

  type Data = {
    data: {
      users: {
        id: string,
        name:string
      }[]
    }
  }

  const fetcher = async (url: string) =>  {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${await getToken({ template: 'hasura' })}`
      },
      body: JSON.stringify({ query })
    }).then(res => res.json());
  }

  const { data, isLoading, error } = useSWR<{data?: GetPostsQuery}>(endpoint, fetcher);

  console.log({data, isLoading, error})

  if (isLoading) return <>loading</>
 
  return (
    <>
      <p>{data?.data?.posts[0]?.title}</p>
      <FormControl >
        <TextField helperText="please enter a banana" label='banana' required={true} value={''}/>
        <Button variant="contained">
          Send
        </Button>
      </FormControl>
    </>
  )
};
