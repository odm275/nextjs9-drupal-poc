import React from "react";
import { useRouter } from "next/router";
import Page404 from "./Page404";
import { withApollo } from "../lib/apollo";
const BabyRouter = ({ children }) => {
  console.log("Baby Router");
  const { asPath } = useRouter();
  // loop through the available paths; and match one.
  console.log(asPath);
  console.log("End Baby Router");
  const currentComponent = children.find(child => child.props.path === asPath);
  console.log("currentComponent", currentComponent);
  return currentComponent;
};

export default withApollo(BabyRouter);
