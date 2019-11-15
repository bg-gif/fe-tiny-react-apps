import React from "react";
import "./App.css";
import Paperclips from "./components/Paperclips";
import Wire from "./components/Wire";

class App extends React.Component {
  state = {
    funds: 11999990,
    wire: 1000,
    paperclips: 0,
    clipPrice: 0.2,
    demand: 50,
    autoClip: 0,
    autoClipCost: 25,
    wireCost: 70,
    superClip: 0,
    superClipCost: 1000
  };
  buyWire = () => {
    this.setState(currentstate => {
      if (currentstate.funds >= currentstate.wireCost)
        return {
          wire: (currentstate.wire += 1000),
          funds: (currentstate.funds -= currentstate.wireCost),
          wireCost: currentstate.wireCost * (120 / 100)
        };
    });
  };

  buyAC = () => {
    this.setState(
      currentstate => {
        return {
          autoClip: (currentstate.autoClip += 1),
          funds: currentstate.funds - currentstate.autoClipCost,
          autoClipCost: Math.round(currentstate.autoClipCost * (120 / 100))
        };
      },
      () => {
        console.log(this.state.autoClip);
      }
    );
  };

  buySC = () => {
    this.setState(currentstate => {
      return {
        superClip: (currentstate.superClip += 1),
        funds: currentstate.funds - currentstate.superClipCost,
        superClipCost: Math.round(currentstate.superClipCost * (120 / 100))
      };
    });
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
          autoClipCost={this.state.autoClipCost}
          superClip={this.state.superClip}
          superClipCost={this.state.superClipCost}
        />
        <br />
        <hr />
        <Wire
          id="wire"
          wire={this.state.wire}
          buyWire={this.buyWire}
          wireCost={this.state.wireCost}
          funds={this.state.funds}
        />
      </>
    );
  }
}

export default App;
