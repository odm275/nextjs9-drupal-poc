import React from "react";
import { withApollo } from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import Page from "../../templates/generic-page";

const PAGE_QUERY = gql`
  query PageQuery($path: String!) {
    route(path: $path) {
      ... on EntityCanonicalUrl {
        nodeContext {
          ...Page
        }
      }
    }
  }

  fragment Page on NodePage {
    title
    body {
      value
    }
  }
`;

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
/* jr. version of react router */
const Router = ({ children }) => {
  const { asPath } = useRouter();
  // loop through the available paths; and match one.
  const currentComponent = children.find(
    child => child.props.path === asPath
  ) || <Page404 />;
  return currentComponent;
};

const Hello = () => <div>Hello</div>;
const Goodbye = () => <div>Goodbye</div>;
const Page404 = () => <div>404</div>;

const PageRouter = () => {
  return (
    <Router>
      <Hello path="/hello" />
      <Goodbye path="/goodbye" />
      <Page path="/info/contact-us" />
    </Router>
  );
};

export default withApollo(PageRouter);
