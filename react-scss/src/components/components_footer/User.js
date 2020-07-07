import React from "react";

const User = (props) => {
  const { min, photo, alt, name } = props;
  return (
    <a href="#" className={min ? "user min" : "user"}>
      <img src={photo} alt={alt}></img>
      <div>{name}</div>
    </a>
  );
};

export default User;
