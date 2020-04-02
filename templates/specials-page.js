import React from "react";
import Layout from "../components/Layout";

const SpecialsPageTemplate = ({
  title,
  body,
  fieldMainImage,
  fieldSectionTitle
}) => {
  return (
    <Layout>
      <p>specials page tho</p>
      <h1>{title}</h1>
      <img src={fieldMainImage.url} />
      <h2>{fieldSectionTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: body.value }} />
    </Layout>
  );
};

export default SpecialsPageTemplate;
