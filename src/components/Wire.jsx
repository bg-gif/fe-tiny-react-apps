import React from "react";

const Wire = ({ wire, buyWire, wireCost, funds }) => {
  return (
    <>
      <h1>Wire: {wire}</h1>
      <button id={funds > wireCost ? "funds" : "nofunds"} onClick={buyWire}>
        {" "}
        Buy Wire{" "}
      </button>
      {` Cost: ${wireCost}`}
    </>
  );
};

export default Wire;
