import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useMutation, useQuery } from "@apollo/client";
import {
  CreateReactionMutation,
  CreateReactionMutationVariables,
  DeletePostMutation,
  DeletePostMutationVariables,
  DeleteReactionMutation,
  DeleteReactionMutationVariables,
  GetPostsQuery,
  Post_Reaction_Types_Enum,
} from "../src/gql/graphql";
import {
  CREATE_REACTION,
  DELETE_POST,
  DELETE_REACTION,
  GET_POSTS,
} from "@/gql/posts";
import { PostForm } from "./PostForm";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
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

  const [createReaction, { loading: creating }] = useMutation<
    CreateReactionMutation,
    CreateReactionMutationVariables
  >(CREATE_REACTION, {
    refetchQueries: [GET_POSTS],
  });

  const [deleteReaction, { loading: removing }] = useMutation<
    DeleteReactionMutation,
    DeleteReactionMutationVariables
  >(DELETE_REACTION, {
    refetchQueries: [GET_POSTS],
  });

  const { userId } = useAuth();

  const [edit, setEdit] = useState(false);

  if (edit)
    return (
      <PostForm after={() => setEdit(false)} initialValues={post} type="Edit" />
    );

  const didReact = (type: Post_Reaction_Types_Enum) => {
    return post.post_reactions.find(
      (r) => r.author_id === userId && r.type === type,
    );
  };

  const onReact = (type: Post_Reaction_Types_Enum) => {
    const reaction = didReact(type);
    if (reaction) {
      deleteReaction({ variables: { id: reaction.id } });
    } else {
      createReaction({
        variables: { type, post_id: post.id, author_id: userId },
      });
    }
  };

  return (
    <Card key={post.id} className="w-96 flex justify-center my-10">
      <CardContent className="w-full">
        <Typography fontSize={24}>{post.title}</Typography>
        <Typography>{post.body}</Typography>
        <div className="mt-5 w-full flex justify-between">
          <div>
            <Button
              disabled={creating || removing}
              onClick={() => onReact(Post_Reaction_Types_Enum.ThumbsUp)}
            >
              {post.post_reactions_aggregate.aggregate?.count}
              {didReact(Post_Reaction_Types_Enum.ThumbsUp) ? (
                <ThumbUpAltIcon />
              ) : (
                <ThumbUpOffAltIcon />
              )}
            </Button>
            <Button
              disabled={creating || removing}
              onClick={() => onReact(Post_Reaction_Types_Enum.ThumbsDown)}
            >
              {didReact(Post_Reaction_Types_Enum.ThumbsDown) ? (
                <ThumbDownAltIcon />
              ) : (
                <ThumbDownOffAltIcon />
              )}
            </Button>
          </div>
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
