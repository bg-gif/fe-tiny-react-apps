import React from "react";

class Paperclips extends React.Component {
  render() {
    return (
      <>
        <h1>Paperclips: {this.props.paperclips}</h1>
        <button onClick={this.props.addPaperclip}>buy paperclip</button>
      </>
    );
  }
}

export default Paperclips;
