import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div>
        <span>
          <button onClick={this.props.onDelete}>qq</button>
        </span>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

class FooterFooter extends React.Component {
  render() {
    return (
      <div>
        {this.props.notesToRender.map((text, index) => {
          return (
            <Note
              key={index}
              text={text}
              onDelete={() => this.props.onDelete(index)}
            />
          );
        })}
      </div>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <div className="post">
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

export default Post;
