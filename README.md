# Fullstack life Hack
A full-stack application that makes your life easy thanks to tools like Hasura, Clerk, and NextJs.

## Stack

| Service     | Description | communicates with | 
| ----------- | ----------- | ----------------- | 
| Postgres    | Database        | Hasura                   |
| Hasura      | GraphQL Engine  | Postgres, NextJs         | 
| NextJs      | Web App         | Hasura, Clerk            | 
| Clerk       | User Management | NextJs                   | 


## Development
```
cd frontend
npm install
npm run dev
```

### [Hasura](https://hasura.io)
Use the Hasura console to make Database changes. You may need to refresh the metadata after making certain changes - specifically, to enum tables.

### [Clerk](https://clerk.com)
- Create a jwt template named 'hasura'.
- Create a webhook for user creation pointed at https://your-app.vercel.app/api/webhooks

## Deployment

The easiest way to deploy is using [Vercel](vercel.com).



## Environment Variables
You'll need to create [clerk.com](https://clerk.com/) and [hasura](https://hasura.com/) accounts.
```bash
# .env.local (never push these values)
HASURA_SECRET=som3s_3cr3t
CLERK_SECRET_KEY=som3__0th3r_s3cr3t
CLERK_ISSUER=https://your-tenant.clerk.accounts.dev
CLERK_WEBHOOK_SECRET=som3__0th3r_s3cr3t
CLERK_JWKS_ENDPOINT=https://your-tenant.clerk.accounts.dev/.well-known/jwks.json
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_som3__0th3r_s3cr3t
NEXT_PUBLIC_HASURA_GRAPHQL_API=https://your-app.hasura.app/v1/graphql
```
