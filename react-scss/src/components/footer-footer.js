import React from "react";

class Note extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

class FooterFooter extends React.Component {
  render() {
    return (
      <div>
        {this.props.notes.map((text, index) => {
          return <Note text={text} key={index} />;
        })}
      </div>
    );
  }
}

export default FooterFooter;
