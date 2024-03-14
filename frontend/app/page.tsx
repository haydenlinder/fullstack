'use client'
import { GetUsersQuery, Users } from "@/src/gql/graphql";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton, useAuth, useUser } from "@clerk/nextjs";
import useSWR from 'swr';
import gql from 'graphql'
import { graphql } from "@/src/gql";
 
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
const query = graphql(`query GetUsers { users { id, name } }`)


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

  const { data, isLoading, error } = useSWR<{data?: GetUsersQuery}>(endpoint, fetcher);

  console.log({data, isLoading, error})

  if (isLoading) return <>loading</>
 
  return <p>{data?.data?.users[0].name}</p>;
};
