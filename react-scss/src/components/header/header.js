import React from "react";
import "./header.scss";
import HeaderReg from "./header-reg";
import HeaderForm from "./header-form";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header-wrapp">
            <div className="header-reg">
              <HeaderReg />
            </div>
            <div className="header-form">
              <HeaderForm />
            </div>
            <div className="header-nav"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
