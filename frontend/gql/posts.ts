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
      post_tags {
        tag {
          id
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
  mutation UpdatePost(
    $id: uuid = ""
    $body: String = ""
    $title: String = ""
    $tags: [post_tags_insert_input!] = { post_id: "", tag_id: "" }
  ) {
    update_posts_by_pk(
      pk_columns: { id: $id }
      _set: { body: $body, title: $title }
    ) {
      id
    }
    delete_post_tags(where: { post_id: { _eq: $id } }) {
      returning {
        id
      }
    }
    insert_post_tags(objects: $tags) {
      returning {
        id
      }
    }
  }
`);

export const CREATE_POST = graphql(`
  mutation CreatePost(
    $body: String = ""
    $creator_id: String = ""
    $org_id: String = ""
    $title: String = ""
    $data: [post_tags_insert_input!] = { post_id: "", tag_id: "" }
  ) {
    insert_posts(
      objects: {
        org_id: $org_id
        body: $body
        creator_id: $creator_id
        title: $title
        post_tags: { data: $data }
      }
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

export const SEARCH_TAGS = graphql(`
  query SearchTags($_regex: String = "") {
    tags(limit: 10, where: { id: { _regex: $_regex } }) {
      id
    }
  }
`);

export const SEARCH_POSTS = graphql(`
  query SearchPosts($_regex: String = "") {
    posts(
      order_by: { created_at: desc }
      where: {
        _or: [
          { author: { name: { _ilike: $_regex } } }
          { body: { _ilike: $_regex } }
          { title: { _ilike: $_regex } }
          { post_tags: { tag_id: { _ilike: $_regex } } }
        ]
      }
      limit: 10
    ) {
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
      post_tags {
        tag {
          id
        }
      }
    }
  }
`);
