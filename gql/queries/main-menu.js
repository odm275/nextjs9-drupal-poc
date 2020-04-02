import gql from "graphql-tag";

const MAIN_MENU_QUERY = gql`
  query MainMenu {
    mainMenu: menuByName(name: "main") {
      links {
        label
        url {
          path
        }
      }
    }
  }
`;

export default MAIN_MENU_QUERY;
