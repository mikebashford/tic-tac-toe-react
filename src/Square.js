import React from "react";

export default function Square({ symbol, onClick }) {
  return (
    <span className="square" onClick={onClick}>
      {symbol}
    </span>
  );
}
