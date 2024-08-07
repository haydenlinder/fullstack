import {
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectProps,
  Tooltip,
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
  GetPostsQueryVariables,
  Post_Reaction_Types_Enum,
  SearchPostsQuery,
  SearchPostsQueryVariables,
  Status_Types_Enum,
} from "../src/gql/graphql";
import {
  CREATE_REACTION,
  DELETE_POST,
  DELETE_REACTION,
  GET_POSTS,
  SEARCH_POSTS,
  UPDATE_POST_STATUS,
} from "@/gql/posts";
import { PostForm } from "./PostForm";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useCallback, useEffect, useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import UserIcon from "@mui/icons-material/AccountCircle";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

import NewIcon from "@mui/icons-material/AddBox";
import WorkIcon from "@mui/icons-material/Loop";
import ShipIcon from "@mui/icons-material/LocalShipping";
import DeliveredIcon from "@mui/icons-material/Done";

import {
  ModalTypes,
  useFilterStore,
  useModalStore,
  useStore,
} from "@/state/store";
import debounce from "lodash/debounce";
import Link from "next/link";
import { InitialValues } from "@/hooks/usePost";
import { parse } from "@/utilities/text";

type Post = GetPostsQuery["posts"][0];

export const Posts = () => {
  const { query } = useStore();
  const { type } = useFilterStore();
  const { data, loading } = useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GET_POSTS,
    {
      variables: {
        _eq: type,
      },
    },
  );
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

  const posts = (query ? searchResults : data)?.posts;
  const noResults = !loading && !searching && !posts?.length;

  return (
    <div className="w-full">
      {loading || noResults ? (
        <div className="w-full flex justify-center h-20 my-5">
          {(loading || searching) && <CircularProgress />}
          {noResults && <>No Results</>}
        </div>
      ) : (
        posts?.map((p) => (
          <div key={p.id + query}>
            <Post post={p} />
          </div>
        ))
      )}
    </div>
  );
};

type Props = {
  post: Post;
};

export const Post = ({ post }: Props) => {
  const { edit, setEdit } = usePost({ post });
  const p: Partial<typeof post> = { ...post };
  delete p.post_tags;
  delete p.__typename;

  const initialValues: InitialValues = {
    ...post,
    body: post.body || undefined,
    title: post.title || undefined,
    tags: post.post_tags.map(({ tag }) => tag.id) || undefined,
  };

  return edit ? (
    <PostForm
      after={() => setEdit(false)}
      formRenderProps={{ initialValues }}
      type="Edit"
    />
  ) : (
    <Card className="flex justify-center my-10 w-full">
      <CardContent className="w-full">
        <Header {...{ post }} />
        <Divider sx={{ my: 4 }} />
        <Typography>Title: {post.title}</Typography>
        <Typography>{post.body}</Typography>
        <Divider sx={{ my: 4 }} />
        {/* TAGS */}
        <div className="my-5">
          {post.post_tags.map(({ tag }, i) => (
            <span key={tag.id + i}>
              <Chip
                label={parse(tag.id)}
                variant="outlined"
                className="mr-2 mb-2"
              />
            </span>
          ))}
        </div>
        <Footer {...{ post }} />
      </CardContent>
    </Card>
  );
};

const Header = ({ post }: { post: Post }) => {
  const [loading, setLoading] = useState(false);
  const [didCopy, setDidCopy] = useState(false);
  const client = useApolloClient();

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setDidCopy(true);
  };

  const handleStatusChange: SelectProps["onChange"] = async (e) => {
    setLoading(true);
    try {
      await client.mutate({
        mutation: UPDATE_POST_STATUS,
        variables: {
          id: post.id,
          status: e.target.value as Status_Types_Enum,
        },
        refetchQueries: [
          { query: GET_POSTS, variables: { _eq: e.target.value } },
          { query: GET_POSTS, variables: { _eq: post.status } },
          SEARCH_POSTS,
        ],
      });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-between w-full items-center">
      {/* LINK, CREATOR, UPDATE STATUS */}
      <div> 
        {/* Copy and link */}
        <div className="flex items-center mb-2">
          <Link
            className="text-blue-300 hover:underline mr-2"
            href={`/posts/${post.id}`}
          >
            {post.id}
          </Link>
          <IconButton onClick={copy} size="small">
            <Tooltip title={didCopy ? "Copied Link!" : "Copy Link"}>
              {didCopy ? <CheckIcon /> : <ContentCopyIcon />}
            </Tooltip>
          </IconButton>
        </div>
        {/* CREATOR */}
        <div className="flex items-center mb-2">
          <UserIcon className="mr-2" />
          <Typography fontSize={16}>{parse(post?.author?.name)}</Typography>
          &nbsp;
          <Typography sx={{ mr: 0.5 }}>
            {" "}
            at {new Date(post.created_at).toLocaleString()}
          </Typography>
        </div>
      </div>
      {/* UPDATE STATUS */}
      <FormControl className="w-fit">
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          disabled={loading}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={post.status}
          label="Status"
          onChange={handleStatusChange}
        >
          <MenuItem value={"NEW"}>
            <NewIcon className="mr-6" /> New
          </MenuItem>
          <MenuItem value={"IN_PROGRESS"}>
            <WorkIcon className="mr-6" /> In Progress
          </MenuItem>
          <MenuItem value={"IN_TRANSIT"}>
            <ShipIcon className="mr-6" /> In Transit
          </MenuItem>
          <MenuItem value={"DELIVERED"}>
            <DeliveredIcon className="mr-6" /> Delivered
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const EditButtons = ({ post }: { post: Post }) => {
  const { userId, deleting, setEdit, edit, deletePost } = usePost({ post });
  return (
    post.creator_id === userId && (
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
            if (window.confirm("Are you sure you want to delete this?")) {
              await deletePost({
                variables: { id: post.id },
                refetchQueries: [GET_POSTS],
              });
            }
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    )
  );
};

const Footer = ({ post }: { post: Post }) => {
  const { creating, removing, onReact, getReaction } = usePost({ post });
  return (
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
      <EditButtons {...{ post }} />
    </div>
  );
};

const usePost = ({ post }: Props) => {
  const { userId } = useAuth();
  const { query } = useStore();
  const { update } = useModalStore();

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
    if (!userId) return update(ModalTypes.LOGIN);
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
