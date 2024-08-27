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
    "\n  query GetPosts($_eq: status_types_enum = NEW) {\n    posts(\n      limit: 10\n      order_by: { created_at: desc }\n      where: { status: { _eq: $_eq } }\n    ) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      billing_so\n      status\n      delivery_instructions\n      destination_poc\n      international_frt_resale\n      destination_address\n      ior_compliance_resale\n      pickup_address\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  query GetPostsById($id: uuid = \"\") {\n    posts_by_pk(id: $id) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      billing_so\n      status\n      delivery_instructions\n      destination_poc\n      international_frt_resale\n      destination_address\n      ior_compliance_resale\n      pickup_address\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n": types.GetPostsByIdDocument,
    "\n  mutation DeletePost($id: uuid = \"\") {\n    delete_posts_by_pk(id: $id) {\n      creator_id\n    }\n  }\n": types.DeletePostDocument,
    "\n  mutation UpdatePost(\n    $id: uuid = \"\"\n    $body: String = \"\"\n    $billing_so: String = \"\"\n    $destination_address: String = \"\"\n    $customer_facing_po_document: String = \"\"\n    $delivery_instructions: String = \"\"\n    $destination_poc: String = \"\"\n    $international_frt_resale: numeric = 0\n    $ior_compliance_resale: numeric = 0\n    $pickup_address: String = \"\"\n    $tracking_number: String = \"\"\n    $carrier: String = \"\"\n    $ticket_number: String = \"\"\n    $proof_of_delivery_document: String = \"\"\n    $title: String = \"\"\n    $tags: [post_tags_insert_input!] = { post_id: \"\", tag_id: \"\" }\n  ) {\n    update_posts_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        tracking_number: $tracking_number\n        carrier: $carrier\n        ticket_number: $ticket_number\n        proof_of_delivery_document: $proof_of_delivery_document\n        body: $body\n        title: $title\n        billing_so: $billing_so\n        destination_address: $destination_address\n        delivery_instructions: $delivery_instructions\n        destination_poc: $destination_poc\n        international_frt_resale: $international_frt_resale\n        ior_compliance_resale: $ior_compliance_resale\n        pickup_address: $pickup_address\n        customer_facing_po_document: $customer_facing_po_document\n      }\n    ) {\n      id\n    }\n    delete_post_tags(where: { post_id: { _eq: $id } }) {\n      returning {\n        id\n      }\n    }\n    insert_post_tags(objects: $tags) {\n      returning {\n        id\n      }\n    }\n  }\n": types.UpdatePostDocument,
    "\n  mutation CreatePost(\n    $creator_id: String = \"\"\n    $org_id: String = \"\"\n    $title: String = \"\"\n    $billing_so: String = \"\"\n    $body: String = \"\"\n    $delivery_instructions: String = \"\"\n    $destination_poc: String = \"\"\n    $destination_address: String = \"\"\n    $international_frt_resale: numeric = 0\n    $ior_compliance_resale: numeric = 0\n    $pickup_address: String = \"\"\n    $customer_facing_po_document: String = \"\"\n    $status: status_types_enum = NEW\n    $tracking_number: String = \"\"\n    $carrier: String = \"\"\n    $ticket_number: String = \"\"\n    $proof_of_delivery_document: String = \"\"\n    $tags_data: [post_tags_insert_input!] = { tag_id: \"\" }\n  ) {\n    insert_posts(\n      objects: {\n        org_id: $org_id\n        body: $body\n        title: $title\n        creator_id: $creator_id\n        billing_so: $billing_so\n        destination_address: $destination_address\n        delivery_instructions: $delivery_instructions\n        destination_poc: $destination_poc\n        international_frt_resale: $international_frt_resale\n        ior_compliance_resale: $ior_compliance_resale\n        customer_facing_po_document: $customer_facing_po_document\n        pickup_address: $pickup_address\n        status: $status\n        tracking_number: $tracking_number\n        carrier: $carrier\n        ticket_number: $ticket_number\n        proof_of_delivery_document: $proof_of_delivery_document\n        post_tags: { data: $tags_data }\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation CreateReaction(\n    $author_id: String = \"\"\n    $post_id: uuid = \"\"\n    $type: post_reaction_types_enum = THUMBS_UP\n  ) {\n    insert_post_reactions_one(\n      object: { author_id: $author_id, post_id: $post_id, type: $type }\n    ) {\n      id\n    }\n  }\n": types.CreateReactionDocument,
    "\n  mutation DeleteReaction($id: uuid = \"\") {\n    delete_post_reactions_by_pk(id: $id) {\n      id\n    }\n  }\n": types.DeleteReactionDocument,
    "\n  mutation UpdatePostStatus($id: uuid = \"\", $status: status_types_enum = NEW) {\n    update_posts_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n    }\n  }\n": types.UpdatePostStatusDocument,
    "\n  query SearchTags($_regex: String = \"\") {\n    tags(limit: 10, where: { id: { _regex: $_regex } }) {\n      id\n    }\n  }\n": types.SearchTagsDocument,
    "\n  query SearchPosts($_regex: String = \"\") {\n    posts(\n      order_by: { created_at: desc }\n      where: {\n        _or: [\n          { author: { name: { _ilike: $_regex } } }\n          { body: { _ilike: $_regex } }\n          { title: { _ilike: $_regex } }\n          { post_tags: { tag_id: { _ilike: $_regex } } }\n        ]\n      }\n      limit: 10\n    ) {\n      id\n      body\n      created_at\n      creator_id\n      status\n      title\n      updated_at\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n": types.SearchPostsDocument,
    "\n  mutation CreateUser(\n    $id: String = \"\"\n    $name: String = \"\"\n    $email: String = \"\"\n  ) {\n    insert_users_one(object: { id: $id, name: $name, email: $email }) {\n      id\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation CreateOrganization(\n    $created_by: String = \"\"\n    $name: String = \"\"\n    $user_id: String = \"\"\n    $organization_id: String = \"\"\n  ) {\n    insert_organizations_one(\n      object: {\n        created_by: $created_by\n        name: $name\n        organization_users: {\n          data: { user_id: $user_id, organization_id: $organization_id }\n        }\n      }\n    ) {\n      id\n    }\n  }\n": types.CreateOrganizationDocument,
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
export function graphql(source: "\n  query GetPosts($_eq: status_types_enum = NEW) {\n    posts(\n      limit: 10\n      order_by: { created_at: desc }\n      where: { status: { _eq: $_eq } }\n    ) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      billing_so\n      status\n      delivery_instructions\n      destination_poc\n      international_frt_resale\n      destination_address\n      ior_compliance_resale\n      pickup_address\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPosts($_eq: status_types_enum = NEW) {\n    posts(\n      limit: 10\n      order_by: { created_at: desc }\n      where: { status: { _eq: $_eq } }\n    ) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      billing_so\n      status\n      delivery_instructions\n      destination_poc\n      international_frt_resale\n      destination_address\n      ior_compliance_resale\n      pickup_address\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostsById($id: uuid = \"\") {\n    posts_by_pk(id: $id) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      billing_so\n      status\n      delivery_instructions\n      destination_poc\n      international_frt_resale\n      destination_address\n      ior_compliance_resale\n      pickup_address\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostsById($id: uuid = \"\") {\n    posts_by_pk(id: $id) {\n      id\n      body\n      created_at\n      creator_id\n      title\n      updated_at\n      billing_so\n      status\n      delivery_instructions\n      destination_poc\n      international_frt_resale\n      destination_address\n      ior_compliance_resale\n      pickup_address\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePost($id: uuid = \"\") {\n    delete_posts_by_pk(id: $id) {\n      creator_id\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePost($id: uuid = \"\") {\n    delete_posts_by_pk(id: $id) {\n      creator_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePost(\n    $id: uuid = \"\"\n    $body: String = \"\"\n    $billing_so: String = \"\"\n    $destination_address: String = \"\"\n    $customer_facing_po_document: String = \"\"\n    $delivery_instructions: String = \"\"\n    $destination_poc: String = \"\"\n    $international_frt_resale: numeric = 0\n    $ior_compliance_resale: numeric = 0\n    $pickup_address: String = \"\"\n    $tracking_number: String = \"\"\n    $carrier: String = \"\"\n    $ticket_number: String = \"\"\n    $proof_of_delivery_document: String = \"\"\n    $title: String = \"\"\n    $tags: [post_tags_insert_input!] = { post_id: \"\", tag_id: \"\" }\n  ) {\n    update_posts_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        tracking_number: $tracking_number\n        carrier: $carrier\n        ticket_number: $ticket_number\n        proof_of_delivery_document: $proof_of_delivery_document\n        body: $body\n        title: $title\n        billing_so: $billing_so\n        destination_address: $destination_address\n        delivery_instructions: $delivery_instructions\n        destination_poc: $destination_poc\n        international_frt_resale: $international_frt_resale\n        ior_compliance_resale: $ior_compliance_resale\n        pickup_address: $pickup_address\n        customer_facing_po_document: $customer_facing_po_document\n      }\n    ) {\n      id\n    }\n    delete_post_tags(where: { post_id: { _eq: $id } }) {\n      returning {\n        id\n      }\n    }\n    insert_post_tags(objects: $tags) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePost(\n    $id: uuid = \"\"\n    $body: String = \"\"\n    $billing_so: String = \"\"\n    $destination_address: String = \"\"\n    $customer_facing_po_document: String = \"\"\n    $delivery_instructions: String = \"\"\n    $destination_poc: String = \"\"\n    $international_frt_resale: numeric = 0\n    $ior_compliance_resale: numeric = 0\n    $pickup_address: String = \"\"\n    $tracking_number: String = \"\"\n    $carrier: String = \"\"\n    $ticket_number: String = \"\"\n    $proof_of_delivery_document: String = \"\"\n    $title: String = \"\"\n    $tags: [post_tags_insert_input!] = { post_id: \"\", tag_id: \"\" }\n  ) {\n    update_posts_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        tracking_number: $tracking_number\n        carrier: $carrier\n        ticket_number: $ticket_number\n        proof_of_delivery_document: $proof_of_delivery_document\n        body: $body\n        title: $title\n        billing_so: $billing_so\n        destination_address: $destination_address\n        delivery_instructions: $delivery_instructions\n        destination_poc: $destination_poc\n        international_frt_resale: $international_frt_resale\n        ior_compliance_resale: $ior_compliance_resale\n        pickup_address: $pickup_address\n        customer_facing_po_document: $customer_facing_po_document\n      }\n    ) {\n      id\n    }\n    delete_post_tags(where: { post_id: { _eq: $id } }) {\n      returning {\n        id\n      }\n    }\n    insert_post_tags(objects: $tags) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePost(\n    $creator_id: String = \"\"\n    $org_id: String = \"\"\n    $title: String = \"\"\n    $billing_so: String = \"\"\n    $body: String = \"\"\n    $delivery_instructions: String = \"\"\n    $destination_poc: String = \"\"\n    $destination_address: String = \"\"\n    $international_frt_resale: numeric = 0\n    $ior_compliance_resale: numeric = 0\n    $pickup_address: String = \"\"\n    $customer_facing_po_document: String = \"\"\n    $status: status_types_enum = NEW\n    $tracking_number: String = \"\"\n    $carrier: String = \"\"\n    $ticket_number: String = \"\"\n    $proof_of_delivery_document: String = \"\"\n    $tags_data: [post_tags_insert_input!] = { tag_id: \"\" }\n  ) {\n    insert_posts(\n      objects: {\n        org_id: $org_id\n        body: $body\n        title: $title\n        creator_id: $creator_id\n        billing_so: $billing_so\n        destination_address: $destination_address\n        delivery_instructions: $delivery_instructions\n        destination_poc: $destination_poc\n        international_frt_resale: $international_frt_resale\n        ior_compliance_resale: $ior_compliance_resale\n        customer_facing_po_document: $customer_facing_po_document\n        pickup_address: $pickup_address\n        status: $status\n        tracking_number: $tracking_number\n        carrier: $carrier\n        ticket_number: $ticket_number\n        proof_of_delivery_document: $proof_of_delivery_document\n        post_tags: { data: $tags_data }\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost(\n    $creator_id: String = \"\"\n    $org_id: String = \"\"\n    $title: String = \"\"\n    $billing_so: String = \"\"\n    $body: String = \"\"\n    $delivery_instructions: String = \"\"\n    $destination_poc: String = \"\"\n    $destination_address: String = \"\"\n    $international_frt_resale: numeric = 0\n    $ior_compliance_resale: numeric = 0\n    $pickup_address: String = \"\"\n    $customer_facing_po_document: String = \"\"\n    $status: status_types_enum = NEW\n    $tracking_number: String = \"\"\n    $carrier: String = \"\"\n    $ticket_number: String = \"\"\n    $proof_of_delivery_document: String = \"\"\n    $tags_data: [post_tags_insert_input!] = { tag_id: \"\" }\n  ) {\n    insert_posts(\n      objects: {\n        org_id: $org_id\n        body: $body\n        title: $title\n        creator_id: $creator_id\n        billing_so: $billing_so\n        destination_address: $destination_address\n        delivery_instructions: $delivery_instructions\n        destination_poc: $destination_poc\n        international_frt_resale: $international_frt_resale\n        ior_compliance_resale: $ior_compliance_resale\n        customer_facing_po_document: $customer_facing_po_document\n        pickup_address: $pickup_address\n        status: $status\n        tracking_number: $tracking_number\n        carrier: $carrier\n        ticket_number: $ticket_number\n        proof_of_delivery_document: $proof_of_delivery_document\n        post_tags: { data: $tags_data }\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation UpdatePostStatus($id: uuid = \"\", $status: status_types_enum = NEW) {\n    update_posts_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePostStatus($id: uuid = \"\", $status: status_types_enum = NEW) {\n    update_posts_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchTags($_regex: String = \"\") {\n    tags(limit: 10, where: { id: { _regex: $_regex } }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query SearchTags($_regex: String = \"\") {\n    tags(limit: 10, where: { id: { _regex: $_regex } }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchPosts($_regex: String = \"\") {\n    posts(\n      order_by: { created_at: desc }\n      where: {\n        _or: [\n          { author: { name: { _ilike: $_regex } } }\n          { body: { _ilike: $_regex } }\n          { title: { _ilike: $_regex } }\n          { post_tags: { tag_id: { _ilike: $_regex } } }\n        ]\n      }\n      limit: 10\n    ) {\n      id\n      body\n      created_at\n      creator_id\n      status\n      title\n      updated_at\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchPosts($_regex: String = \"\") {\n    posts(\n      order_by: { created_at: desc }\n      where: {\n        _or: [\n          { author: { name: { _ilike: $_regex } } }\n          { body: { _ilike: $_regex } }\n          { title: { _ilike: $_regex } }\n          { post_tags: { tag_id: { _ilike: $_regex } } }\n        ]\n      }\n      limit: 10\n    ) {\n      id\n      body\n      created_at\n      creator_id\n      status\n      title\n      updated_at\n      customer_facing_po_document\n      tracking_number\n      carrier\n      ticket_number\n      proof_of_delivery_document\n      author {\n        name\n        id\n      }\n      post_reactions {\n        author_id\n        type\n        id\n      }\n      post_reactions_aggregate {\n        aggregate {\n          count\n        }\n      }\n      post_tags {\n        tag {\n          id\n        }\n      }\n      organization {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $id: String = \"\"\n    $name: String = \"\"\n    $email: String = \"\"\n  ) {\n    insert_users_one(object: { id: $id, name: $name, email: $email }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser(\n    $id: String = \"\"\n    $name: String = \"\"\n    $email: String = \"\"\n  ) {\n    insert_users_one(object: { id: $id, name: $name, email: $email }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateOrganization(\n    $created_by: String = \"\"\n    $name: String = \"\"\n    $user_id: String = \"\"\n    $organization_id: String = \"\"\n  ) {\n    insert_organizations_one(\n      object: {\n        created_by: $created_by\n        name: $name\n        organization_users: {\n          data: { user_id: $user_id, organization_id: $organization_id }\n        }\n      }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateOrganization(\n    $created_by: String = \"\"\n    $name: String = \"\"\n    $user_id: String = \"\"\n    $organization_id: String = \"\"\n  ) {\n    insert_organizations_one(\n      object: {\n        created_by: $created_by\n        name: $name\n        organization_users: {\n          data: { user_id: $user_id, organization_id: $organization_id }\n        }\n      }\n    ) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;