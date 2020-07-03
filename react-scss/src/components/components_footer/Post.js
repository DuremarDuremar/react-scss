import React from "react";
import User from "./User";

export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
          alt="actor"
          name="Duglas"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post_name">some account</div>
        <div className="post_descr">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    );
  }
}
