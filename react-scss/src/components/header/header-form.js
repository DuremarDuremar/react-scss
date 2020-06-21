import React from "react";
import "./header-form.scss";
import logo from "../../img/logo.svg";

class HeaderFrom extends React.Component {
  render() {
    return (
      <div className="header-form">
        <div className="container">
          <div className="header-form-wrapp">
            <div className="header-logo">
              <img src={logo} />
              <p>online</p>
            </div>
            <div className="header-input">
              <form action="">
                <input type="text" />
                <button>Search</button>
              </form>
            </div>
            <div className="header-cart">
              <div className="cart">
                Your cart
                <p>(2 items)</p>
              </div>
              <form action="" className="price">
                <p>$125.0</p>
                <button>Checkout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderFrom;
