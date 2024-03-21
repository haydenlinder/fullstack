import {
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";

import {
  useApolloClient,
  useLazyQuery,
  useMutation,
  useQuery,
} from "@apollo/client";
import {
  CreateReactionMutation,
  CreateReactionMutationVariables,
  DeletePostMutation,
  DeletePostMutationVariables,
  DeleteReactionMutation,
  DeleteReactionMutationVariables,
  GetPostsQuery,
  Post_Reaction_Types_Enum,
  SearchPostsQuery,
  SearchPostsQueryVariables,
} from "../src/gql/graphql";
import {
  CREATE_REACTION,
  DELETE_POST,
  DELETE_REACTION,
  GET_POSTS,
  SEARCH_POSTS,
} from "@/gql/posts";
import { PostForm } from "./PostForm";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import UserIcon from "@mui/icons-material/AccountCircle";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useQueryStore } from "@/state/store";
import debounce from "lodash/debounce";

export const Posts = () => {
  const { query } = useQueryStore();
  const { data, loading } = useQuery<GetPostsQuery>(GET_POSTS);
  const [search, { data: searchResults, loading: searching }] = useLazyQuery<
    SearchPostsQuery,
    SearchPostsQueryVariables
  >(SEARCH_POSTS);

  const debouncer = useCallback(
    debounce((vars: SearchPostsQueryVariables) => {
      return search({ variables: vars });
    }, 300),
    [],
  );

  useEffect(() => {
    debouncer({
      _regex: `%${query}%`,
    });
  }, [query]);

  return (
    <div className="w-full">
      {loading || (searching && <CircularProgress />)}
      <>
        {(searchResults || (searching ? { posts: [] } : data))?.posts.map(
          (p) => <Post key={p.id} post={p} />,
        )}
      </>
    </div>
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
    parse,
  } = usePost({ post });

  const initialValues = {
    body: post.body,
    title: post.title,
    id: post.id,
    tags: post.post_tags.map(({ tag }) => tag.id),
  };

  if (edit)
    return (
      <PostForm
        after={() => setEdit(false)}
        initialValues={initialValues}
        type="Edit"
      />
    );

  return (
    <Card key={post.id} className="flex justify-center my-10 w-full">
      <CardContent className="w-full">
        <div className="flex items-center">
          <UserIcon className="mr-2" />
          <Typography fontSize={16}>{parse(post?.author?.name)}</Typography>
        </div>
        <div className="my-4">
          <Typography fontSize={24}>{parse(post?.title)}</Typography>
          <Typography>{parse(post.body)}</Typography>
        </div>
        <div className="my-5">
          {post.post_tags.map(({ tag }) => (
            <Chip
              key={tag.id}
              label={parse(tag.id)}
              variant="outlined"
              className="mr-2 mb-2"
            />
          ))}
        </div>
        {/* FOOTER */}
        <div className="mt-5 w-full flex justify-between">
          {/* REACTIONS */}
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
          {/* ACTIONS */}
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
  const { query } = useQueryStore();

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

  const parse = (text?: string) => {
    if (!query) return text;
    const regEscape = (v: string) =>
      v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

    const chunks = text?.split(new RegExp(`(${regEscape(query)})`, "ig"));
    const regex = new RegExp(regEscape(query), "ig");

    return chunks?.map((chunk) => {
      return (
        <>
          {regex.test(chunk) ? (
            <span className="bg-yellow-800">{chunk}</span>
          ) : (
            <span>{chunk}</span>
          )}
        </>
      );
    });
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
    parse,
  };
};
