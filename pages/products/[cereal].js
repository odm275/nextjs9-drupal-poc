import React from "react";
import { withApollo } from "../../lib/apollo";
import ProductPage from "../../templates/product-page";
import BabyRouter from "../../components/BabyRouter";

const ProductRouter = () => {
  return (
    <BabyRouter>
      <ProductPage path="/products/puffs" />
      <ProductPage path="/products/waffle-crisp" />
      <ProductPage path="/products/bob-ross" />
    </BabyRouter>
  );
};

export default withApollo(ProductRouter);
