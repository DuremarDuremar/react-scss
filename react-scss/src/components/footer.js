import React from "react";
import Feed from "../components/components_footer/Feed";
import "./footer.scss";
import Header from "./components_footer/Header";
import Profile from "./components_footer/Profile";
// import { indexDelete } from "../components/func/indexDelete";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Header />
        <Feed />
        <Profile />
      </footer>
    );
  }
}

export default Footer;
