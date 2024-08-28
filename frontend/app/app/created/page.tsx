"use client";

import { PostForm } from "@/components/PostForm";
import { Posts } from "@/components/Posts";
import { GET_POSTS, GET_USER_POSTS, SEARCH_POSTS } from "@/gql/posts";
import { SearchPostsQueryVariables } from "@/src/gql/graphql";
import {
  ModalTypes,
  useFilterStore,
  useModalStore,
  useStore,
} from "@/state/store";
import { useLazyQuery, useQuery } from "@apollo/client";
import { SignedIn, useAuth } from "@clerk/nextjs";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { update } = useModalStore();
  const { userId } = useAuth();

  const { type } = useFilterStore();
  const { data, loading } = useQuery(GET_USER_POSTS, {
    variables: {
      _eq: userId,
    },
  });

  const posts = data?.posts;

  const handleClick = () => {
    if (!userId) return update(ModalTypes.LOGIN);
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Button variant="contained" onClick={handleClick}>
        {isFormOpen ? (
          <>
            <CloseIcon /> Cancel
          </>
        ) : (
          <>
            <AddIcon /> Create New Job Listing
          </>
        )}
      </Button>
      <SignedIn>
        {isFormOpen && <PostForm after={() => setIsFormOpen(false)} />}
      </SignedIn>
      <Posts posts={posts} loading={loading} />
    </div>
  );
}
