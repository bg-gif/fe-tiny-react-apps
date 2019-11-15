import React from "react";

import "./App.css";
import Paperclips from "./components/Paperclips";
import Wire from "./components/Wire";

class App extends React.Component {
  state = {
    funds: 110,
    wire: 1000,
    paperclips: 0,
    clipPrice: 0.2,
    demand: 50,
    autoClip: 0
  };
  buyWire = () => {
    this.setState(
      currentstate => {
        return {
          wire: (currentstate.wire += 1000),
          funds: (currentstate.funds -= 70)
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  buyAC = () => {
    this.setState(
      currentstate => {
        return {
          autoClip: (currentstate.autoClip += 1)
        };
      },
      () => {
        console.log(this.state.autoClip);
      }
    );
  };

  changePrice = ({ target: { name } }) => {
    this.setState(currentstate => {
      let price = this.state.clipPrice;
      let demand = this.state.demand;
      if (name === "inc") {
        price += 0.02;
      }
      if (name === "dec") {
        if (price > 0.04) price -= 0.02;
      }
      demand = Math.round((1 / price) * 10);
      return { clipPrice: price, demand: demand };
    });
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
          wire={this.state.wire}
          funds={this.state.funds}
          addPaperclip={this.addPaperclip}
          paperclips={this.state.paperclips}
          clipPrice={this.state.clipPrice}
          changePrice={this.changePrice}
          demand={this.state.demand}
          buyAC={this.buyAC}
          autoClip={this.state.autoClip}
        />
        <Wire wire={this.state.wire} buyWire={this.buyWire} />
      </>
    );
  }
}

export default App;
