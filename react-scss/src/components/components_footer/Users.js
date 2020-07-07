import React from "react";
import User from "./User";
import InstaService from "../../services/instaService";
import ErrorMessage from "./error";

export default class Users extends React.Component {
  instaService = new InstaService();

  state = {
    users: [],
    error: false,
  };

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.instaService.getAllUsers().then(this.onUserLoaded).catch(this.onError);
  }

  onUserLoaded = (users) => {
    this.setState({
      users: users,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
    });
  };

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <a href="#" className="user min">
          <img src={item.photo} alt={item.altname}></img>
          <div>{item.name}</div>
        </a>
      );
    });
  }

  render() {
    const { error, users } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(users);

    return (
      <div className="right">
        <User
          photo="https://www.kino-teatr.ru/acter/foto/hollywood/49001.jpg"
          alt="actor"
          name="Duglas"
        />
        <div className="users_block">{items}</div>
      </div>
    );
  }
}
