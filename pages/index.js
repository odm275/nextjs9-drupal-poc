import Layout from "../components/Layout";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ALL_PRODUCTS_QUERY = gql`
  # Write your query or mutation here
  query allProducts {
    commerceProductQuery {
      entities {
        ... on CommerceProductDefault {
          title
          body {
            value
          }
          path {
            alias
          }
          fieldPrice {
            number
            currencyCode
          }
          fieldMainImage {
            url
            alt
          }
          fieldSku
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(ALL_PRODUCTS_QUERY);
  console.log("data", data);
  if (loading) return <div />;
  console.log(data);
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        {data.commerceProductQuery.entities.map(
          ({ title, fieldPrice, fieldMainImage, fieldSku, path }) => {
            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ textAlign: "center" }}>
                  <a href={`${path.alias}`}>{title}</a>
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

export default withApollo(Home);
