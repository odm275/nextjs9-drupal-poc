import gql from "graphql-tag";

const GENERIC_PAGE_QUERY = gql`
  query GenericPage($path: String!) {
    route(path: $path) {
      ... on EntityCanonicalUrl {
        nodeContext {
          ...GenericPage
        }
      }
    }
  }

  fragment GenericPage on NodePage {
    title
    body {
      value
    }
  }
`;

export default GENERIC_PAGE_QUERY;
