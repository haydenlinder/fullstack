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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
import { useCallback, useEffect, useState } from "react";
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
  post: GetPostsQuery["posts"][0];
};

export const Post = ({ post }: Props) => {
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
  const [didCopy, setDidCopy] = useState(false);
  const client = useApolloClient();

  const initialValues: InitialValues = {
    ...post,
    actual_delivery_date: new Date(post.actual_delivery_date),
    customer_facing_po_document: post.customer_facing_po_document || "",
    proof_of_delivery_document: post.proof_of_delivery_document || "",
    customer_facing_po_document_file: {
      inputFiles: [],
      inputValue: "",
    },
    proof_of_delivery_document_file: {
      inputFiles: [],
      inputValue: "",
    },
    delivery_date: new Date(post.delivery_date),
    body: post.body || undefined,
    title: post.title || undefined,
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
        formRenderProps={{ initialValues }}
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

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setDidCopy(true);
  };

  const EditButtons = () => {
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

  return (
    <Card className="flex justify-center my-10 w-full">
      <CardContent className="w-full">
        {/* HEADER */}
        <div className="flex justify-between w-full items-center">
          {/* LINK ad CREATOR */}
          <div>
            {/* Copy and link */}
            <div className="flex items-center mb-2">
              <Link
                className="text-blue-300 hover:underline mr-2"
                href={`/shipments/${post.id}`}
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
          <EditButtons />
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
        <Divider sx={{ my: 4 }} />
        {/* LINE ITEMS */}
        <LineItems post={post} />
        {/* MAIN */}
        <Divider sx={{ mt: 10 }} />
        <div className="flex justify-between">
          <Request post={post} />
          <Shipment post={post} />
        </div>
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
          <EditButtons />
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

const LineItems = ({ post }: Props) => {
  return (
    <>
      <Typography className="underline" variant="h5" sx={{ my: 4 }}>
        Line Items
      </Typography>
      <div className="my-4">
        <TableContainer className="border rounded" component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead className="bg-gray-700">
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
                <TableRow key={row.id}>
                  <TableCell scope="row">{row.part_number}</TableCell>
                  <TableCell align="right" className="whitespace-pre-wrap">
                    {row.description}
                  </TableCell>
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
    </>
  );
};

const Request = ({ post }: Props) => {
  return (
    <div>
      <Typography className="underline" variant="h5" sx={{ my: 4 }}>
        Request
      </Typography>
      <div>
        <TableContainer className="max-w-fit" component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell align="left" scope="row">
                  Requested Delivery Date
                </TableCell>
                <TableCell align="left">
                  {new Date(post.delivery_date).toLocaleDateString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">PSR</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.psr}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Pickup Address</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.pickup_address}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Destination Address</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.pickup_address}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Destination POC</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.destination_poc}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Delivery Instructions</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.delivery_instructions}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Billing SO</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.billing_so}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">IOR Compliance Resale</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.ior_compliance_resale}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  International FRT Compliance Resale
                </TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.international_frt_resale}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">PO document</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
                    href={post.customer_facing_po_document || ""}
                  >
                    View Document <OpenInNewIcon fontSize="inherit" />
                  </a>{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const Shipment = ({ post }: Props) => {
  return (
    <div>
      <Typography className="underline" variant="h5" sx={{ my: 4 }}>
        Shipment
      </Typography>
      <div>
        <TableContainer className="max-w-fit" component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell align="left" scope="row">
                  Tracking Number
                </TableCell>
                <TableCell align="left">{post.tracking_number}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Carrier</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.carrier}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Actual_delivery_date</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {new Date(post.actual_delivery_date).toLocaleDateString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">ticket_number</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.ticket_number}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Proof_of_delivery_document</TableCell>
                <TableCell align="left" className="whitespace-pre-wrap">
                  {post.proof_of_delivery_document && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                      href={post.proof_of_delivery_document || ""}
                    >
                      View Document <OpenInNewIcon fontSize="inherit" />
                    </a>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
