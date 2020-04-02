import Layout from "../components/Layout";
import Link from "next/link";

const FrontPage = ({ data }) => {
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        {data.commerceProductQuery.entities.map(
          ({ title, fieldPrice, fieldMainImage, fieldSku, path }) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ textAlign: "center" }}>
                  <Link href="/products/[cereal]" as={`${path.alias}`}>
                    <a>{title}</a>
                  </Link>
                </div>
                <div>
                  <img src={fieldMainImage.url} width="250" height="300" />
                </div>
                <div style={{ textAlign: "center" }}>
                  ${fieldPrice.number} {fieldPrice.currencyCode}
                </div>
              </div>
            );
          }
        )}
      </div>
    </Layout>
  );
};

export default FrontPage;
