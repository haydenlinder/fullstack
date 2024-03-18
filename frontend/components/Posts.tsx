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

export const Posts = () => {
  const { data, loading, error } = useQuery<GetPostsQuery>(GET_POSTS);

  const [mutate, { loading: deleting }] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(DELETE_POST);

  return (
    <>
      <Card className="w-96 flex justify-center p-10 my-10">
        <PostForm />
      </Card>
      {loading && <CircularProgress />}
      <>
        {data?.posts.map((p) => (
          <Card key={p.id} className="w-96 flex justify-center p-10 my-10">
            <CardContent>
              <Button
                onClick={() =>
                  mutate({
                    variables: { id: p.id },
                    refetchQueries: [GET_POSTS],
                  })
                }
              >
                <DeleteIcon />
              </Button>
              <Typography fontSize={24}>{p.title}</Typography>
              <Typography>{p.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </>
    </>
  );
};
