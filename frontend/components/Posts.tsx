import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
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
      {loading && <CircularProgress />}
      <>{data?.posts.map((p) => <Post key={p.id} post={p} />)}</>
    </>
  );
};

type Props = {
  post: GetPostsQuery["posts"][0];
};

const Post = ({ post }: Props) => {
  const {
    userId,
    creating,
    removing,
    edit,
    deleting,
    getReaction,
    setEdit,
    onReact,
    deletePost,
  } = usePost({ post });

  if (edit)
    return (
      <PostForm after={() => setEdit(false)} initialValues={post} type="Edit" />
    );

  return (
    <Card key={post.id} className=" w-[400px] flex justify-center my-10">
      <CardContent className="w-full">
        <Typography fontSize={24}>{post?.author?.name}</Typography>
        <Typography fontSize={24}>{post?.title}</Typography>
        <Typography>{post.body}</Typography>
        <div className="mt-5 w-full flex justify-between">
          <div className="flex items-center">
            <IconButton
              color="primary"
              disabled={creating || removing}
              onClick={() => onReact(Post_Reaction_Types_Enum.ThumbsUp)}
            >
              {getReaction()?.type === Post_Reaction_Types_Enum.ThumbsUp ? (
                <ThumbUpAltIcon />
              ) : (
                <ThumbUpOffAltIcon />
              )}
            </IconButton>
            <IconButton
              color="primary"
              disabled={creating || removing}
              onClick={() => onReact(Post_Reaction_Types_Enum.ThumbsDown)}
            >
              {getReaction()?.type == Post_Reaction_Types_Enum.ThumbsDown ? (
                <ThumbDownAltIcon />
              ) : (
                <ThumbDownOffAltIcon />
              )}
            </IconButton>
            <div className="ml-2">
              {post.post_reactions_aggregate.aggregate?.count}
            </div>
          </div>
          {post.creator_id === userId && (
            <div className="">
              <IconButton
                color="primary"
                disabled={deleting}
                onClick={() => setEdit(!edit)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="primary"
                disabled={deleting}
                onClick={async () => {
                  await deletePost({
                    variables: { id: post.id },
                    refetchQueries: [GET_POSTS],
                  });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const usePost = ({ post }: Props) => {
  const { userId } = useAuth();

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

  const [edit, setEdit] = useState(false);

  const getReaction = (type?: Post_Reaction_Types_Enum) => {
    return post.post_reactions.find((r) => r.author_id === userId);
  };

  const onReact = async (type: Post_Reaction_Types_Enum) => {
    if (creating || removing) return;
    const reaction = getReaction();
    if (reaction) {
      await deleteReaction({ variables: { id: reaction.id } });
    }
    if (type !== reaction?.type) {
      createReaction({
        variables: { type, post_id: post.id, author_id: userId },
      });
    }
  };

  return {
    creating,
    removing,
    getReaction,
    onReact,
    deleting,
    setEdit,
    edit,
    deletePost,
    userId,
  };
};
