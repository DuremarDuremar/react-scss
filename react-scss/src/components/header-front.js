import React from "react";
import "./header-front.scss";
import search from "../img/search.svg";
import logo from "../img/logo.svg";
import cart from "../img/cart.svg";
import star from "../img/star.svg";

class HeaderFront extends React.Component {
  render() {
    return (
      <div className="header-front">
        <div className="container">
          <div className="header-front-wrapp">
            <div className="header-front-logo">
              <div>
                <img src={logo} alt="logo" />
              </div>

              <p>online</p>
            </div>
            <div className="header-front-input">
              <form action="#">
                <input type="text" />

                <button>
                  <img src={search} alt="search" />
                  <p>Search</p>
                </button>
              </form>
            </div>
            <div className="header-front-cart">
              <img src={cart} alt="cart" />
              <div className="cart">
                Your cart <span>(2 items)</span>
              </div>
              <div className="bay">
                <p>$125.0</p>
              </div>
              <button>Checkout</button>
            </div>
            <div className="header-front-list">
              <img src={star} alt="" />
              <div>Wish list</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderFront;
