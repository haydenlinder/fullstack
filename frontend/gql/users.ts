import { graphql } from "@/src/gql";

export const CREATE_USER = graphql(`
  mutation CreateUser(
    $id: String = ""
    $name: String = ""
    $email: String = ""
  ) {
    insert_users_one(object: { id: $id, name: $name, email: $email }) {
      id
    }
  }
`);

export const CREATE_ORG = graphql(`
  mutation CreateOrganization(
    $created_by: String = ""
    $name: String = ""
    $user_id: String = ""
    $organization_id: String = ""
  ) {
    insert_organizations_one(
      object: {
        created_by: $created_by
        name: $name
        organization_users: {
          data: { user_id: $user_id, organization_id: $organization_id }
        }
      }
    ) {
      id
    }
  }
`);
