import React from "react";
import FooterFooter from "./footer-footer";
import "./footer.scss";

const withoutIndex = (array, index) => {
  array.slice(0, index).concat(array.slice(index + 1));
};

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: ["покупки: чай, кофе, молоко", "дела: бегать, поспать"],
    };
  }

  OneNoteDelete = (indexToRemove) => {
    this.setState((oldState) => {
      return {
        notes: withoutIndex(oldState.notes, indexToRemove),
      };
    });
  };

  render() {
    return (
      <footer>
        <p>11</p>
        <FooterFooter notes={this.state.notes} onDelete={this.OneNoteDelete} />
      </footer>
    );
  }
}

export default Footer;
