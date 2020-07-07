import React from "react";
import logoFooter from "../../img/footer/logo-footer.svg";
import { link, Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-footer">
        <div className="h-flex container-footer">
          <Link to="/" className="logo">
            <img src={logoFooter} ali="logofooter"></img>
          </Link>
          <nav className="links">
            <ul>
              <li>
                <Link to="/" className="menu_links">
                  Лента
                </Link>
              </li>
              <li>
                <Link to="/profile" className="menu_links">
                  Профиль
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
