import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useMutation, useQuery } from "@apollo/client";
import {
  DeletePostMutation,
  DeletePostMutationVariables,
  GetPostsQuery,
} from "../src/gql/graphql";
import { DELETE_POST, GET_POSTS } from "@/gql/posts";
import { PostForm } from "./PostForm";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export const Posts = () => {
  const { data, loading, error } = useQuery<GetPostsQuery>(GET_POSTS);

  return (
    <>
      <PostForm />

      {loading && <CircularProgress />}
      <>{data?.posts.map((p) => <Post key={p.id} post={p} />)}</>
    </>
  );
};

type Props = {
  post: GetPostsQuery["posts"][0];
};

const Post = ({ post }: Props) => {
  const [deletePost, { loading: deleting }] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(DELETE_POST);
  const { userId } = useAuth();

  const [edit, setEdit] = useState(false);

  if (edit)
    return (
      <PostForm after={() => setEdit(false)} initialValues={post} type="Edit" />
    );

  return (
    <Card key={post.id} className="w-96 flex justify-center my-10">
      <CardContent className="w-full">
        <Typography fontSize={24}>{post.title}</Typography>
        <Typography>{post.body}</Typography>
        <div className="mt-5 w-full flex justify-between">
          {post.creator_id === userId && (
            <div className="">
              <Button disabled={deleting} onClick={() => setEdit(!edit)}>
                <EditIcon />
              </Button>
              <Button
                disabled={deleting}
                onClick={async () => {
                  await deletePost({
                    variables: { id: post.id },
                    refetchQueries: [GET_POSTS],
                  });
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
