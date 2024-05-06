import { graphql } from "@/src/gql";

export const GET_POSTS = graphql(`
  query GetPosts($_eq: status_types_enum = NEW) {
    posts(
      limit: 10
      order_by: { created_at: desc }
      where: { status: { _eq: $_eq } }
    ) {
      id
      body
      created_at
      creator_id
      title
      updated_at
      billing_so
      delivery_date
      status
      delivery_instructions
      destination_poc
      international_frt_resale
      destination_address
      ior_compliance_resale
      pickup_address
      customer_facing_po_document
      psr
      tracking_number
      carrier
      actual_delivery_date
      ticket_number
      proof_of_delivery_document
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
      line_items {
        customer_po
        description
        extended_resell
        id
        manufacturer
        part_number
        po
        quantity
        so
        unit_resell
        whs_delivery_date
      }
    }
  }
`);

export const GET_POST_BY_ID = graphql(`
  query GetPostsById($id: uuid = "") {
    posts_by_pk(id: $id) {
      id
      body
      created_at
      creator_id
      title
      updated_at
      billing_so
      delivery_date
      status
      delivery_instructions
      destination_poc
      international_frt_resale
      destination_address
      ior_compliance_resale
      pickup_address
      customer_facing_po_document
      psr
      tracking_number
      carrier
      actual_delivery_date
      ticket_number
      proof_of_delivery_document
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
      line_items {
        customer_po
        description
        extended_resell
        id
        manufacturer
        part_number
        po
        quantity
        so
        unit_resell
        whs_delivery_date
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
    $billing_so: String = ""
    $destination_address: String = ""
    $customer_facing_po_document: String = ""
    $delivery_date: timestamptz = ""
    $delivery_instructions: String = ""
    $destination_poc: String = ""
    $international_frt_resale: numeric = 0
    $ior_compliance_resale: numeric = 0
    $pickup_address: String = ""
    $tracking_number: String = ""
    $carrier: String = ""
    $actual_delivery_date: timestamptz = null
    $ticket_number: String = ""
    $proof_of_delivery_document: String = ""
    $psr: String = ""
    $title: String = ""
    $tags: [post_tags_insert_input!] = { post_id: "", tag_id: "" }
    $line_items_data: [line_items_insert_input!] = {
      created_by: ""
      customer_po: ""
      description: ""
      extended_resell: ""
      manufacturer: ""
      part_number: ""
      po: ""
      quantity: 0
      so: ""
      unit_resell: ""
      whs_delivery_date: ""
      post_id: ""
    }
  ) {
    update_posts_by_pk(
      pk_columns: { id: $id }
      _set: {
        tracking_number: $tracking_number
        carrier: $carrier
        actual_delivery_date: $actual_delivery_date
        ticket_number: $ticket_number
        proof_of_delivery_document: $proof_of_delivery_document
        body: $body
        title: $title
        billing_so: $billing_so
        destination_address: $destination_address
        delivery_date: $delivery_date
        delivery_instructions: $delivery_instructions
        destination_poc: $destination_poc
        international_frt_resale: $international_frt_resale
        ior_compliance_resale: $ior_compliance_resale
        pickup_address: $pickup_address
        psr: $psr
        customer_facing_po_document: $customer_facing_po_document
      }
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
    delete_line_items(where: { post_id: { _eq: $id } }) {
      returning {
        id
      }
    }
    insert_line_items(objects: $line_items_data) {
      returning {
        id
      }
    }
  }
`);

export const CREATE_POST = graphql(`
  mutation CreatePost(
    $creator_id: String = ""
    $org_id: String = ""
    $title: String = ""
    $billing_so: String = ""
    $body: String = ""
    $delivery_date: timestamptz = ""
    $delivery_instructions: String = ""
    $destination_poc: String = ""
    $destination_address: String = ""
    $international_frt_resale: numeric = 0
    $ior_compliance_resale: numeric = 0
    $pickup_address: String = ""
    $psr: String = ""
    $customer_facing_po_document: String = ""
    $status: status_types_enum = NEW
    $tracking_number: String = ""
    $carrier: String = ""
    $actual_delivery_date: timestamptz = null
    $ticket_number: String = ""
    $proof_of_delivery_document: String = ""
    $tags_data: [post_tags_insert_input!] = { tag_id: "" }
    $line_items_data: [line_items_insert_input!] = {
      created_by: ""
      customer_po: ""
      description: ""
      extended_resell: ""
      manufacturer: ""
      part_number: ""
      po: ""
      quantity: 0
      so: ""
      unit_resell: ""
      whs_delivery_date: ""
    }
  ) {
    insert_posts(
      objects: {
        org_id: $org_id
        body: $body
        creator_id: $creator_id
        title: $title
        billing_so: $billing_so
        destination_address: $destination_address
        delivery_date: $delivery_date
        delivery_instructions: $delivery_instructions
        destination_poc: $destination_poc
        international_frt_resale: $international_frt_resale
        ior_compliance_resale: $ior_compliance_resale
        customer_facing_po_document: $customer_facing_po_document
        pickup_address: $pickup_address
        psr: $psr
        status: $status
        tracking_number: $tracking_number
        carrier: $carrier
        actual_delivery_date: $actual_delivery_date
        ticket_number: $ticket_number
        proof_of_delivery_document: $proof_of_delivery_document
        post_tags: { data: $tags_data }
        line_items: { data: $line_items_data }
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

export const UPDATE_POST_STATUS = graphql(`
  mutation UpdatePostStatus($id: uuid = "", $status: status_types_enum = NEW) {
    update_posts_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
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
      status
      title
      updated_at
      customer_facing_po_document
      tracking_number
      carrier
      actual_delivery_date
      ticket_number
      proof_of_delivery_document
      psr
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
      line_items {
        customer_po
        description
        extended_resell
        id
        manufacturer
        part_number
        po
        quantity
        so
        unit_resell
        whs_delivery_date
      }
    }
  }
`);
