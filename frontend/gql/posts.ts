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
export const UPDATE_POST = graphql(`
  mutation UpdatePost($id: uuid = "", $body: String = "", $title: String = "") {
    update_posts_by_pk(
      pk_columns: { id: $id }
      _set: { body: $body, title: $title }
    ) {
      id
    }
  }
`);

export const CREATE_POST = graphql(`
  mutation CreatePost(
    $body: String = ""
    $creator_id: String = ""
    $title: String = ""
  ) {
    insert_posts(
      objects: { body: $body, creator_id: $creator_id, title: $title }
    ) {
      returning {
        id
      }
    }
  }
`);
