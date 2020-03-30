import React from "react";
import { useRouter } from "next/router";
import Page404 from "./Page404";
const BabyRouter = ({ children }) => {
  console.log("lol");
  const { asPath } = useRouter();
  // loop through the available paths; and match one.
  console.log(asPath);
  console.log("children", children);
  const currentComponent = children.find(
    child => child.props.path === asPath
  ) || <Page404 />;
  return currentComponent;
};

export default BabyRouter;
