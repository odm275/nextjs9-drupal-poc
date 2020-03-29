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
  console.log("page tempalte");
  const { data, loading, error } = useQuery(SPECIALS_QUERY, {
    variables: { path: path }
  });
  if (loading) return <div />;
  console.log("data", data);

  return (
    <div>
      <h1>generic page</h1>
    </div>
  );
};

export default withApollo(Page);
