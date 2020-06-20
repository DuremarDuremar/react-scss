import React from "react";
import HeaderReg from "./header-reg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header-reg">
            <HeaderReg />
          </div>
          <div className="header-form">2</div>
          <div className="header-nav">3</div>
          <div className="header-afisha">4</div>
        </div>
      </header>
    );
  }
}

export default Header;
