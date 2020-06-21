import React from "react";
import "./header.scss";
import HeaderForm from "./header-form";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-wrapp">
            <div className="header-form">
              <HeaderForm />
            </div>
            <div className="header-nav"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
