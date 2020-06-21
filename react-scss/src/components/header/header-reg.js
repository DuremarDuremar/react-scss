import React from "react";
import "./header-reg.scss";

class HeaderReg extends React.Component {
  render() {
    return (
      <div className="header-reg">
        <div className="container">
          <ul>
            <li>Sign in</li>
            <li>My Account</li>
            <li>Order Status</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderReg;
