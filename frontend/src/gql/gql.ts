/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetPosts {\n    posts(limit: 10, order_by: { created_at: desc }) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  mutation DeletePost($id: uuid = \"\") {\n    delete_posts_by_pk(id: $id) {\n      creator_id\n    }\n  }\n": types.DeletePostDocument,
    "\n  mutation UpdatePost($id: uuid = \"\", $body: String = \"\", $title: String = \"\") {\n    update_posts_by_pk(\n      pk_columns: { id: $id }\n      _set: { body: $body, title: $title }\n    ) {\n      id\n    }\n  }\n": types.UpdatePostDocument,
    "\n  mutation CreatePost(\n    $body: String = \"\"\n    $creator_id: String = \"\"\n    $title: String = \"\"\n    $data: [post_tags_insert_input!] = { post_id: \"\", tag_id: \"\" }\n  ) {\n    insert_posts(\n      objects: {\n        body: $body\n        creator_id: $creator_id\n        title: $title\n        post_tags: { data: $data }\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation CreateReaction(\n    $author_id: String = \"\"\n    $post_id: uuid = \"\"\n    $type: post_reaction_types_enum = THUMBS_UP\n  ) {\n    insert_post_reactions_one(\n      object: { author_id: $author_id, post_id: $post_id, type: $type }\n    ) {\n      id\n    }\n  }\n": types.CreateReactionDocument,
    "\n  mutation DeleteReaction($id: uuid = \"\") {\n    delete_post_reactions_by_pk(id: $id) {\n      id\n    }\n  }\n": types.DeleteReactionDocument,
    "\n  mutation CreateUser($id: String = \"\", $name: String = \"\") {\n    insert_users_one(object: { id: $id, name: $name }) {\n      id\n    }\n  }\n": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPosts {\n    posts(limit: 10, order_by: { created_at: desc }) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPosts {\n    posts(limit: 10, order_by: { created_at: desc }) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePost($id: uuid = \"\") {\n    delete_posts_by_pk(id: $id) {\n      creator_id\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePost($id: uuid = \"\") {\n    delete_posts_by_pk(id: $id) {\n      creator_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePost($id: uuid = \"\", $body: String = \"\", $title: String = \"\") {\n    update_posts_by_pk(\n      pk_columns: { id: $id }\n      _set: { body: $body, title: $title }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePost($id: uuid = \"\", $body: String = \"\", $title: String = \"\") {\n    update_posts_by_pk(\n      pk_columns: { id: $id }\n      _set: { body: $body, title: $title }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePost(\n    $body: String = \"\"\n    $creator_id: String = \"\"\n    $title: String = \"\"\n    $data: [post_tags_insert_input!] = { post_id: \"\", tag_id: \"\" }\n  ) {\n    insert_posts(\n      objects: {\n        body: $body\n        creator_id: $creator_id\n        title: $title\n        post_tags: { data: $data }\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost(\n    $body: String = \"\"\n    $creator_id: String = \"\"\n    $title: String = \"\"\n    $data: [post_tags_insert_input!] = { post_id: \"\", tag_id: \"\" }\n  ) {\n    insert_posts(\n      objects: {\n        body: $body\n        creator_id: $creator_id\n        title: $title\n        post_tags: { data: $data }\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateReaction(\n    $author_id: String = \"\"\n    $post_id: uuid = \"\"\n    $type: post_reaction_types_enum = THUMBS_UP\n  ) {\n    insert_post_reactions_one(\n      object: { author_id: $author_id, post_id: $post_id, type: $type }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReaction(\n    $author_id: String = \"\"\n    $post_id: uuid = \"\"\n    $type: post_reaction_types_enum = THUMBS_UP\n  ) {\n    insert_post_reactions_one(\n      object: { author_id: $author_id, post_id: $post_id, type: $type }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteReaction($id: uuid = \"\") {\n    delete_post_reactions_by_pk(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteReaction($id: uuid = \"\") {\n    delete_post_reactions_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($id: String = \"\", $name: String = \"\") {\n    insert_users_one(object: { id: $id, name: $name }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($id: String = \"\", $name: String = \"\") {\n    insert_users_one(object: { id: $id, name: $name }) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;