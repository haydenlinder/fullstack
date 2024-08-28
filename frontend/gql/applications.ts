import { graphql } from "@/src/gql";

export const CREATE_APPLICATION = graphql(`
  mutation CreateApplication($user_id: String = "", $post_id: uuid = "") {
    insert_applications_one(object: { post_id: $post_id, user_id: $user_id }) {
      id
    }
  }
`);

export const GET_USER_APPLICATIONS = graphql(`
  query GetUserApplications($_eq: String = "") {
    applications(
      where: { user_id: { _eq: $_eq } }
      limit: 10
      order_by: { created_at: desc }
    ) {
      post {
        id
        body
        created_at
        creator_id
        title
        updated_at
        billing_so
        status
        delivery_instructions
        destination_poc
        international_frt_resale
        destination_address
        ior_compliance_resale
        pickup_address
        customer_facing_po_document
        tracking_number
        carrier
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
        organization {
          name
          id
        }
      }
    }
  }
`);
