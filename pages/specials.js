import React from "react";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import SPECIALS_PAGES_QUERY from "../gql/queries/specials-page";
import SpecialsPageTemplate from "../templates/specials-page";

const SpecialsPage = () => {
  const { data, loading, error } = useQuery(SPECIALS_PAGES_QUERY, {
    variables: { path: "/specials" }
  });
  if (loading) {
    return null;
  }

  const {
    route: {
      nodeContext: { title, body, fieldMainImage, fieldSectionTitle }
    }
  } = data;

  return (
    <SpecialsPageTemplate
      title={title}
      body={body}
      fieldMainImage={fieldMainImage}
      fieldSectionTitle={fieldSectionTitle}
    />
  );
};

export default withApollo(SpecialsPage);
