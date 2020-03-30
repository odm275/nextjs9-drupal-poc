import React from "react";
import { withApollo } from "../../lib/apollo";
import Page from "../../templates/generic-page";
import SpecialPage from "../../templates/specials-page";
import BabyRouter from "../../components/BabyRouter";

const PageRouter = () => {
  return (
    <BabyRouter>
      <Page path="/info/contact-us" />
      <SpecialPage path="/info/specials" />
    </BabyRouter>
  );
};

export default withApollo(PageRouter);
