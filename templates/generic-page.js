import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const SPECIALS_QUERY = gql`
  query PageQuery($path: String!) {
    route(path: $path) {
      ... on EntityCanonicalUrl {
        nodeContext {
          ...Page
        }
      }
    }
  }

  fragment Page on NodePage {
    title
    body {
      value
    }
  }
`;

const Page = ({ path }) => {
  const { data, loading, error } = useQuery(SPECIALS_QUERY, {
    variables: { path: path }
  });
  if (loading)
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
    );

  const {
    route: {
      nodeContext: { title, body }
    }
  } = data;
  console.log("data", body);

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.value }} />
    </div>
  );
};

export default withApollo(Page);
