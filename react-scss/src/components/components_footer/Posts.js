import React from "react";
import Post from "./Post";
import User from "./User";
import ErrorMessage from "./error";
import InstaService from "../../services/instaService";

class Posts extends React.Component {
  instaService = new InstaService();

  state = {
    posts: [],
    error: false,
  };

  componentDidMount() {
    this.updatePosts();
  }

  updatePosts() {
    this.instaService.getAllPost().then(this.onPostLoaded).catch(this.onError);
  }

  onPostLoaded = (posts) => {
    this.setState({
      posts: posts,
      error: false,
    });

    console.log(this.state.posts);
  };

  onError = (err) => {
    this.setState({
      error: true,
    });

    console.log("error");
  };

  renderItems(arr) {
    return arr.map((item) => {
      const { name, altname, src, alt, photo, descr, id } = item;
      return (
        <div key={id} className="post">
          <User src={photo} alt={altname} name={name} min />
          <img src={src} alt={alt}></img>
          <div className="post__name">{name}</div>
          <div className="post__descr">{descr}</div>
        </div>
      );
    });
  }

  render() {
    const { error, posts } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(posts);
    return (
      <div className="left">
        <Post
          src="https://st.kp.yandex.net/im/kadr/1/8/4/kinopoisk.ru-The-Game-1840313.jpg"
          alt="The Game"
          name="The Game"
        />
        <Post
          src="https://st.kp.yandex.net/im/kadr/1/4/3/kinopoisk.ru-Falling-Down-1435602.jpg"
          alt="Falling Down"
          name="Falling Down"
        />
        {items}
      </div>
    );
  }
}

export default Posts;
