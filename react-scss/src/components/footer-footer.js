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
      </div>
    );
  }
}

export default Post;
