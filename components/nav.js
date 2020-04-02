import React from "react";
import Link from "next/link";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import MAIN_MENU_QUERY from "../gql/queries/main-menu";

const Nav = () => {
  // const { data, loading, error } = useQuery(MAIN_MENU_QUERY);
  // console.log("data", data);
  return (
    <nav>
      {/* {data.mainMenu.links.map(({ label, path }) => (
        <Link>
          <a>{link.label}</a>
        </Link>
      ))} */}
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/specials">
          <a>Specials</a>
        </Link>
        <Link href="/[page]" as="/spring-promotion">
          <a>Spring Promotion</a>
        </Link>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  );
};

export default withApollo(Nav);
