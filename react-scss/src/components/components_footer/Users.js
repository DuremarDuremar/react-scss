import React from "react";
import User from "./User";

export default function Users() {
  return (
    <div className="right">
      <User
        src="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
        alt="actor"
        name="Duglas"
      />
      <div className="users_block">
        <User
          src="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
          alt="actor"
          name="Duglas"
          min
        />
        <User
          src="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
          alt="actor"
          name="Duglas"
          min
        />
        <User
          src="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
          alt="actor"
          name="Duglas"
          min
        />
        <User
          src="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
          alt="actor"
          name="Duglas"
          min
        />
      </div>
    </div>
  );
}
