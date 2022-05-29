import React from "react";
import Square from "./Square";

export default function Board({ board, onSquareClick }) {
  return (
    <div className="board">
      {board.map((symbol, index) => (
        <Square
          symbol={symbol}
          key={index}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}
