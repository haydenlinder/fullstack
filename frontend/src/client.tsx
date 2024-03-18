"use client";

import { ApolloLink, HttpLink, from } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { useAuth } from "@clerk/nextjs";
import { useMemo } from "react";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
});

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  const { getToken } = useAuth();

  const makeClient = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      const token = await getToken({ template: "hasura" });

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return () =>
      new NextSSRApolloClient({
        link: from([
          authMiddleware,
          typeof window === "undefined"
            ? ApolloLink.from([
                new SSRMultipartLink({
                  stripDefer: true,
                }),
                httpLink,
              ])
            : httpLink,
        ]),
        cache: new NextSSRInMemoryCache(),
      });
  }, [getToken]);

  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
