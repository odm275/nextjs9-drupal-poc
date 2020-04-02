import React from "react";
import { withApollo } from "../../lib/apollo";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import PRODUCT_PAGE_QUERY from "../../gql/queries/products-page";

const ProductPage = () => {
  const { asPath } = useRouter();

  const { data, loading, error } = useQuery(PRODUCT_PAGE_QUERY, {
    variables: { path: asPath }
  });
  if (loading)
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
    );

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
      <p>Product page tho</p>
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
