import { graphql } from "@/src/gql";

export const GET_POSTS = graphql(`
  query GetPosts {
    posts(limit: 10, order_by: { created_at: desc }) {
      id
      body
      created_at
      creator_id
      title
      updated_at
    }
  }
`);

export const DELETE_POST = graphql(`
  mutation DeletePost($id: uuid = "") {
    delete_posts_by_pk(id: $id) {
      creator_id
    }
  }
`);
