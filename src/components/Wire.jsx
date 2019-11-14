import React from "react";

const Wire = ({ wire, buyWire }) => {
  return (
    <>
      <h1>Wire: {wire}</h1>
      <button onClick={buyWire}> Buy Wire </button>
    </>
  );
};

export default Wire;
