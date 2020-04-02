import gql from "graphql-tag";

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
export default ALL_PRODUCTS_QUERY;
