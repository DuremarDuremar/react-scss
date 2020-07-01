import React from "react";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <ul>
          <li>
            <p>Winners of the Oscars</p>
          </li>
          <li>
            <p>Cannes Film Festival</p>
          </li>
          <li>
            <p>Venice Film Festival</p>
          </li>
          <li>
            <p>Berlin Film Festival</p>
          </li>
          <li>
            <p>Sundance Film Festival</p>
          </li>
          <li>
            <p>Toronto Film Festival</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
