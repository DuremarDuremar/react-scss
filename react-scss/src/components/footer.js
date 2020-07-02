import React from "react";
import Feed from "../components/components_footer/Feed";
import "./footer.scss";
import Header from "./components_footer/Header";
// import { indexDelete } from "../components/func/indexDelete";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Header />
        <Feed />
      </footer>
    );
  }
}

export default Footer;
