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
      author {
        name
        id
      }
      post_reactions {
        author_id
        type
        id
      }
      post_reactions_aggregate {
        aggregate {
          count
        }
      }
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

export const CREATE_REACTION = graphql(`
  mutation CreateReaction(
    $author_id: String = ""
    $post_id: uuid = ""
    $type: post_reaction_types_enum = THUMBS_UP
  ) {
    insert_post_reactions_one(
      object: { author_id: $author_id, post_id: $post_id, type: $type }
    ) {
      id
    }
  }
`);

export const DELETE_REACTION = graphql(`
  mutation DeleteReaction($id: uuid = "") {
    delete_post_reactions_by_pk(id: $id) {
      id
    }
  }
`);
