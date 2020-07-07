import React from "react";
import Feed from "../components/components_footer/Feed";
import "./footer.scss";
import Header from "./components_footer/Header";
import Profile from "./components_footer/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { indexDelete } from "../components/func/indexDelete";

class Footer extends React.Component {
  render() {
    return (
      <Router>
        <footer>
          <Header />
          <Route path="/" component={Feed} exact />
          <Route path="/profile" component={Profile} exact />
        </footer>
      </Router>
    );
  }
}

export default Footer;
