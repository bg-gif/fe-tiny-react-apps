import React from "react";

class Paperclips extends React.Component {
  state = {};

  render() {
    return (
      <>
        <img
          src="https://i.gadgets360cdn.com/large/clippytheclip_twitter_1553346167624.jpg"
          alt=""
        />
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
          <button
            id={
              this.props.funds > this.props.autoClipCost ? "funds" : "nofunds"
            }
            onClick={
              this.props.funds > this.props.autoClipCost
                ? this.props.buyAC
                : null
            }
          >
            Buy AutoClipper
          </button>

          {this.props.autoClip > 0 && ` Auto-Clippers: ${this.props.autoClip}`}
          {` Cost: ${this.props.autoClipCost}`}
        </div>
        <div>
          {this.props.autoClip > 10 && (
            <button
              id={
                this.props.funds > this.props.superClipCost
                  ? "funds"
                  : "nofunds"
              }
              onClick={
                this.props.funds > this.props.superClipCost
                  ? this.props.buyAC
                  : null
              }
            >
              Buy SuperClipper
            </button>
          )}

          {this.props.superClip > 0 &&
            ` Super-Clippers: ${this.props.superClip}`}
        </div>
      </>
    );
  }
}

export default Paperclips;
