import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";

const ALL_PRODUCTS_QUERY = gql`
  # Write your query or mutation here
  query allProducts {
    commerceProductQuery {
      entities {
        ... on CommerceProductDefault {
          title
          body {
            value
          }
          path {
            alias
          }
          fieldPrice {
            number
            currencyCode
          }
          fieldMainImage {
            url
            alt
          }
          fieldSku
        }
      }
    }
  }
`;

const CerealPage = () => {
  return (
    <div>
      <h1>Buy Ceral</h1>
    </div>
  );
};

export default withApollo(CerealPage);
