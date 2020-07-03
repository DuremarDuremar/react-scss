import React from "react";
import Posts from "../components_footer/Posts";
import Users from "./Users";

export default function Feed() {
  return (
    <div className="container-footer feed">
      <Posts />
      <Users />
    </div>
  );
}
