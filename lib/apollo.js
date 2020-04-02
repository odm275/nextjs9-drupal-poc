import ApolloClient from "apollo-client";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import introspectionQueryResultData from "./fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

export function withApollo(PageComponent) {
  // Client Side
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState); // Going to create or re-use an apollo client

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };
  // End Client Side
  // Server Side
  WithApollo.getInitialProps = async ctx => {
    const { AppTree } = ctx; //
    const apolloClient = (ctx.apollClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // If on server
    if (typeof window === "undefined") {
      // If response is finished return pageProps
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import("@apollo/react-ssr");
        // AppTree is our whole tree app.
        // Pass on pageProps and apolloClient to its.
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient
            }}
          />
        );
      } catch (e) {
        console.error(e);
      }

      Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState
    };
  };
  // End Server Side

  return WithApollo;
}

const initApolloClient = (initialState = {}) => {
  const ssrMode = typeof window === "undefined"; // window is undefined then we are in server
  console.log("ssrMode", ssrMode);
  const cache = new InMemoryCache({
    fragmentMatcher
  }).restore(initialState);

  const client = new ApolloClient({
    ssrMode,
    link: new HttpLink({
      uri: "http://the-cereal-shop-drupal.lndo.site/graphql", // Server URL (must be absolute)
      fetch
    }),
    cache
  });
  return client;
};
