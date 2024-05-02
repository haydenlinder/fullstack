import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { CREATE_ORG, CREATE_USER } from "@/gql/users";
import {
  CreateOrganizationMutation,
  CreateOrganizationMutationVariables,
  CreateUserMutation,
  CreateUserMutationVariables,
} from "@/src/gql/graphql";
import { print } from "graphql";
import { TypedDocumentNode } from "@apollo/client";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(CLERK_WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const callHasura = async <tquery, tvariables>(
    query: TypedDocumentNode,
    variables: tvariables,
    errorMessage: string,
    successMessage: string,
  ) => {
    try {
      await fetch(process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API || "", {
        method: "POST",
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_SECRET || "",
        },
        body: JSON.stringify({ query: print(query), variables }),
      });
      return new Response(`"${successMessage}"`, { status: 200 });
    } catch (error) {
      console.error(`"${errorMessage}", ${error}`);
      return new Response("Error occured", {
        status: 400,
      });
    }
  };

  switch (evt.type) {
    case "user.created":
      return await callHasura<CreateUserMutation, CreateUserMutationVariables>(
        CREATE_USER,
        {
          name: evt.data.first_name + " " + evt.data.last_name,
          id: evt.data.id,
          email: evt.data.email_addresses[0].email_address,
        },
        "Error creating user",
        "Successfully created user",
      );

    case "organization.created":
      return await callHasura<
        CreateOrganizationMutation,
        CreateOrganizationMutationVariables
      >(
        CREATE_ORG,
        {
          created_by: evt.data.created_by,
          name: evt.data.name,
          user_id: evt.data.created_by,
          organization_id: evt.data.id,
        },
        "Error creating org",
        "Successfully created org",
      );

    default:
      console.error("Error verifying webhook:", `Unexpected type: ${evt.type}`);
      return new Response("Error occured", {
        status: 400,
      });
  }
  // Create user in our DB
}
