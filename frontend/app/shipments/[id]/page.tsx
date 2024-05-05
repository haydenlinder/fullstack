"use client";

import { Post } from "@/components/Posts";
import { GET_POST_BY_ID } from "@/gql/posts";
import {
  GetPostsByIdQuery,
  GetPostsByIdQueryVariables,
} from "@/src/gql/graphql";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { useParams, usePathname } from "next/navigation";
export default function Shipments() {
  const params = useParams();

  const { data, loading, error } = useQuery<
    GetPostsByIdQuery,
    GetPostsByIdQueryVariables
  >(GET_POST_BY_ID, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return <CircularProgress />;
  return data?.posts_by_pk && <Post post={data?.posts_by_pk} />;
}
