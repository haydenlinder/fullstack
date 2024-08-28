"use client";

import { Posts } from "@/components/Posts";
import { GET_USER_APPLICATIONS } from "@/gql/applications";
import { useQuery } from "@apollo/client";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = useAuth();

  const { data, loading } = useQuery(GET_USER_APPLICATIONS, {
    variables: {
      _eq: userId,
    },
  });

  const posts = data?.applications.map((a) => a.post);

  return (
    <div className="w-full flex flex-col items-center">
      <Posts posts={posts} loading={loading} />
    </div>
  );
}
