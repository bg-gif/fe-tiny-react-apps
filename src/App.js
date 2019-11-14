import React from "react";

import "./App.css";
import Paperclips from "./components/Paperclips";
import Wire from "./components/Wire";

class App extends React.Component {
  state = {
    paperclips: 0,
    wire: 1000
  };
  addPaperclip = () => {
    this.setState(currentstate => {
      let updateWire = currentstate.wire;
      updateWire--;
      let updatePaperclips = currentstate.paperclips;
      updatePaperclips++;
      return {
        paperclips: updatePaperclips,
        wire: updateWire
      };
    });
  };

  render() {
    return (
      <>
        <Paperclips
          paperclips={this.state.paperclips}
          addPaperclip={this.addPaperclip}
        />
        <Wire wire={this.state.wire} />
      </>
    );
  }
}

export default App;
