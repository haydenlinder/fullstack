import { addTypenameToDocument } from "@apollo/client/utilities";
import { CodegenConfig } from "@graphql-codegen/cli";
import { readFileSync } from "fs";

const secret =
  readFileSync(".env.local", "utf-8")
    .split("\n")
    .find((i) => i.startsWith("HASURA_SECRET"))
    ?.split("=")[1] || "";

const config: CodegenConfig = {
  schema: {
    "https://fullstack.hasura.app/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": secret,
      },
    },
  },
  documents: ["gql/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      config: {
        addTypenameToDocument: true,
      },
      preset: "client",
    },
  },
};

export default config;
