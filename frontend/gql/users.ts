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
