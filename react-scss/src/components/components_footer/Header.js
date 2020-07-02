import React from "react";
import logoFooter from "../../img/footer/logo-footer.svg";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-footer">
        <div className="h-flex container-footer">
          <a href="#" className="logo">
            <img src={logoFooter} ali="logofooter"></img>
          </a>
          <nav className="links">
            <ul>
              <li>
                <a href="#" className="menu_links">
                  Лента
                </a>
              </li>
              <li>
                <a href="#" className="menu_links">
                  Профиль
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
