import gql from "graphql-tag";

const SPECIALS_PAGES_QUERY = gql`
  query SpecialsPage($path: String!) {
    route(path: $path) {
      ... on EntityCanonicalUrl {
        nodeContext {
          ...SpecialsPage
        }
      }
    }
  }

  fragment SpecialsPage on NodeSpecialsPage {
    title
    body {
      value
    }
    fieldMainImage {
      url
    }
    fieldSectionTitle
  }
`;

export default SPECIALS_PAGES_QUERY;
