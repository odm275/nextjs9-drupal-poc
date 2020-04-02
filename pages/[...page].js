import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import GENERIC_PAGE_QUERY from "../gql/queries/generic-page";
import GenericPage from "../templates/generic-page";
import Layout from "../components/Layout";

const Page = () => {
  const { asPath } = useRouter();
  const { data, loading, error } = useQuery(GENERIC_PAGE_QUERY, {
    variables: { path: asPath }
  });
  if (loading) {
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
    );
  }

  const {
    route: {
      nodeContext: { title, body }
    }
  } = data;

  return (
    <Layout>
      <GenericPage title={title} body={body} />
    </Layout>
  );
};

export default withApollo(Page);
