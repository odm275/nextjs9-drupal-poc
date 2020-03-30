import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const SPECIALS_QUERY = gql`
  query PageQuery($path: String!) {
    route(path: $path) {
      ... on EntityCanonicalUrl {
        nodeContext {
          entityBundle
          ...Special
        }
      }
    }
  }

  fragment Special on NodeSpecialsPage {
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

const Page = ({ path }) => {
  console.log("page tempalte");
  const { data, loading, error } = useQuery(SPECIALS_QUERY, {
    variables: { path: path }
  });
  if (loading)
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
    );

  const {
    route: {
      nodeContext: { title, body, fieldMainImage, fieldSectionTitle }
    }
  } = data;

  return (
    <div>
      <p>specials page tho</p>
      <h1>{title}</h1>
      <img src={fieldMainImage.url} />
      <h2>{fieldSectionTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: body.value }} />
    </div>
  );
};

export default withApollo(Page);
