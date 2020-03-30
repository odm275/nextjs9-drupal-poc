import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const PRODUCT_PAGE_QUERY = gql`
  query ProductQuery($path: String!) {
    route(path: $path) {
      ... on EntityCanonicalUrl {
        commerceProductContext {
          title
          ...Product
        }
      }
    }
  }

  fragment Product on CommerceProductDefault {
    title
    body {
      value
    }
    fieldPrice {
      number
      currencyCode
    }
    fieldMainImage {
      url
    }
    fieldSku
  }
`;

const ProductPage = ({ path }) => {
  const { data, loading, error } = useQuery(PRODUCT_PAGE_QUERY, {
    variables: { path }
  });
  if (loading)
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
    );
  console.log("data", data);

  const {
    route: {
      commerceProductContext: {
        title,
        body,
        fieldPrice,
        fieldMainImage,
        fieldSku
      }
    }
  } = data;

  return (
    <div>
      <h1>{title}</h1>
      <img src={fieldMainImage.url} width="400" height="600" />
      <h3>Price</h3>
      <div>
        {fieldPrice.number} <span>{fieldPrice.currencyCode}</span>
      </div>
      <h3>Sku</h3>
      <div>{fieldSku}</div>
      <h3>Description</h3>
      <div dangerouslySetInnerHTML={{ __html: body.value }} />
    </div>
  );
};

export default withApollo(ProductPage);
