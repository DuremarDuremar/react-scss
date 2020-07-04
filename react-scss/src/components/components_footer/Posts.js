import React from "react";
import Post from "./Post";
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

  render() {
    return (
      <div className="left">
        <Post
          src="https://cdn21.img.ria.ru/images/155959/50/1559595090_0:0:3160:2048_600x600_80_0_1_be476b2955b5e027bdbb47b9ff1945f2.jpg"
          alt="berlin"
        />
        <Post
          src="https://horosho-tam.ru/thumb/1024/pics/28/26/5a7b2941d8dca154c3dd2628/.jpg"
          alt="munich"
        />
      </div>
    );
  }
}

export default Posts;
