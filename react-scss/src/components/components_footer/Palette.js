import React from "react";
import InstaService from "../../services/instaService";
import ErrorMessage from "./error";

export default class Palette extends React.Component {
  InstaService = new InstaService();
  state = {
    error: false,
    photos: [],
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotoLoaded)
      .catch(this.onError);
  }

  onError = (err) => {
    this.setState({
      error: true,
    });
  };

  onPhotoLoaded = (photos) => {
    this.setState({
      photos: photos,
      error: false,
    });
  };

  // render(){
  //     return(

  //     )
  // }
}
