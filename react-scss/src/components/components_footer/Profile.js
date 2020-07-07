import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
  return (
    <div className="container profile">
      <User
        photo="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
        alt="actor"
        name="Duglas"
      />
      <Palette />
    </div>
  );
};

export default Profile;
