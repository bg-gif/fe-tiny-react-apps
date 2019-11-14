import React from "react";

class Paperclips extends React.Component {
  state = {};

  render() {
    return (
      <>
        <h1>Paperclips: {this.props.paperclips}</h1>

        <button onClick={this.props.addPaperclip}>Make paperclip</button>

        <h4>Funds: {this.props.funds}</h4>
        <h4>Demand: {this.props.demand}</h4>
        <div>
          <h5>
            Price per clip: £{parseFloat(this.props.clipPrice).toFixed(2)}
          </h5>

          <button onClick={this.props.changePrice} name="inc">
            Increase Price
          </button>

          <button onClick={this.props.changePrice} name="dec">
            Decrease Price
          </button>
        </div>
        <div>
          {this.props.autoClip > 0 && this.props.autoClip}
          <button onClick={this.props.buyAC}>Buy AutoClip</button>
        </div>
      </>
    );
  }
}

export default Paperclips;
