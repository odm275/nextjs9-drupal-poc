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
export default PRODUCT_PAGE_QUERY;
