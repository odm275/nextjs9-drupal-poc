import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import ALL_PRODUCTS_QUERY from "../gql/queries/all-products-query";
import FrontPage from "../templates/front-page";

const Home = () => {
  const { data, loading, error } = useQuery(ALL_PRODUCTS_QUERY);
  if (loading) return <div />;
  return <FrontPage data={data} />;
};

export default withApollo(Home);
