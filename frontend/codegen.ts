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
  documents: ["app/**/*.tsx", "components/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
