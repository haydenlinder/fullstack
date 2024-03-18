import { graphql } from "@/src/gql";

export const createUser = `mutation CreateUser($id: String = "", $name: String = "") {
    insert_users_one(object: {id: $id, name: $name}) {
      id
    }
  }`;

const CREATE_USER = graphql(`
  mutation CreateUser($id: String = "", $name: String = "") {
    insert_users_one(object: { id: $id, name: $name }) {
      id
    }
  }
`);
