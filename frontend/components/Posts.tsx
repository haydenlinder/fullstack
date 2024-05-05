import {
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
import { useCallback, useEffect, useState } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import UserIcon from "@mui/icons-material/AccountCircle";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import {
  ModalTypes,
  useFilterStore,
  useModalStore,
  useStore,
} from "@/state/store";
import debounce from "lodash/debounce";

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
          {noResults && <>No Resuts</>}
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
  const p: Partial<typeof post> = { ...post };
  delete p.line_items;
  delete p.post_tags;
  delete p.__typename;

  const [loading, setLoading] = useState(false);
  const client = useApolloClient();

  const initialValues = {
    ...post,
    customer_facing_po_document: post.customer_facing_po_document || "",
    customer_facing_po_document_file: "",
    delivery_date: new Date(post.delivery_date),
    body: post.body || undefined,
    title: post.title || undefined,
    // id: post.id,
    tags: post.post_tags.map(({ tag }) => tag.id) || undefined,
    products: post.line_items.map((i) => ({
      ...i,
      whs_delivery_date: new Date(i.whs_delivery_date),
    })),
  };

  if (edit)
    return (
      <PostForm
        after={() => setEdit(false)}
        initialValues={initialValues}
        type="Edit"
      />
    );

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
    <Card className="flex justify-center my-10 w-full relative">
      <CardContent className="w-full">
        <div className="flex items-center mb-2">
          <UserIcon className="mr-2" />
          <Typography fontSize={16}>{parse(post?.author?.name)}</Typography>
        </div>

        <FormControl
          className="right-4 absolute w-fit top-6"
          sx={{ position: "absolute" }}
        >
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            disabled={loading}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={post.status}
            label="Status"
            onChange={handleStatusChange}
          >
            <MenuItem value={"NEW"}>New</MenuItem>
            <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
            <MenuItem value={"IN_TRANSIT"}>In Transit</MenuItem>
            <MenuItem value={"DELIVERED"}>Delivered</MenuItem>
          </Select>
        </FormControl>

        <Typography fontSize={16}>
          Created: {new Date(post.created_at).toLocaleString()}
        </Typography>
        {/* LINE_ITEMS */}
        <div className="my-4">
          <Typography fontSize={24}>{parse(post.id)}</Typography>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Part Number</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Unit Resell</TableCell>
                  <TableCell align="right">Extended Resell</TableCell>
                  <TableCell align="right">Customer PO</TableCell>
                  <TableCell align="right">Manufacturer</TableCell>
                  <TableCell align="right">SO</TableCell>
                  <TableCell align="right">PO</TableCell>
                  <TableCell align="right">Whs delivery date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {post.line_items.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">{row.part_number}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.unit_resell}</TableCell>
                    <TableCell align="right">
                      {row.unit_resell * row.quantity}
                    </TableCell>
                    <TableCell align="right">{row.customer_po}</TableCell>
                    <TableCell align="right">{row.manufacturer}</TableCell>
                    <TableCell align="right">{row.so}</TableCell>
                    <TableCell align="right">{row.po}</TableCell>
                    <TableCell align="right">
                      {new Date(row.whs_delivery_date).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        {/* MAIN */}
        <div>
          <div>
            Delivery Date: {new Date(post.delivery_date).toLocaleDateString()}
          </div>
          <div>PSR: {post.psr}</div>
          <div>Pickup Address: {post.pickup_address}</div>
          <div>Destination Address: {post.destination_address}</div>
          <div>Destination POC: {post.destination_poc}</div>
          <div>Delivery Instructions: {post.delivery_instructions}</div>
          <div>Billing SO: {post.billing_so}</div>
          <div>IOR Compliance Resale: {post.ior_compliance_resale}</div>
          <div>
            International FRT Compliance Resale: {post.international_frt_resale}
          </div>
          <div>
            PO document:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
              href={post.customer_facing_po_document || ""}
            >
              View Document <OpenInNewIcon fontSize="inherit" />
            </a>
          </div>
        </div>
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
  /** Highlights text that is part of the current search */
  const parse = (text?: string) => {
    if (!query) return text;
    const regEscape = (v: string) =>
      v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

    const chunks = text?.split(new RegExp(`(${regEscape(query)})`, "ig"));
    const regex = new RegExp(regEscape(query), "ig");

    return chunks?.map((chunk, i) => {
      return (
        <>
          {regex.test(chunk) ? (
            <span key={`${chunk}-${Math.random()}`} className="bg-yellow-800">
              {chunk}
            </span>
          ) : (
            <span key={`${chunk}-${Math.random()}`}>{chunk}</span>
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
