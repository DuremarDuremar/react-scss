import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-fiction">
        <div className="sidebar-fiction-title sidebar-subtitle">
          Fiction & Literature
        </div>
        <ul>
          <li>Children</li>
          <li>Science</li>
          <li>Fantasy</li>
          <li>Mystery</li>
          <li>Romance</li>
          <li>Horror</li>
          <li>Poetry</li>
          <li>Literature</li>
          <li>Crime</li>
        </ul>
      </div>
      <div className="sidebar-non">
        <div className="sidebar-non-title sidebar-subtitle">Non - Fiction</div>
        <ul>
          <li>Comic</li>
          <li>Cook</li>
          <li>Psychology</li>
          <li>Medical</li>
          <li>Art</li>
          <li>Photography</li>
          <li>Law</li>
          <li>History</li>
          <li>Business</li>
          <li>Computer</li>
        </ul>
      </div>
      <div className="sidebar-other">
        <div className="sidebar-other-title sidebar-subtitle">Other</div>
        <ul>
          <li>Baby</li>
          <li>Sex</li>
          <li>Travel</li>
          <li>Science</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
