import React, { useState } from "react";
import Board from "./Board";

const initialBoard = ["", "", "", "", "", "", "", "", ""];

const PLAYER_1_SYMBOL = "X";
const PLAYER_2_SYMBOL = "O";

export default function Game() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1_SYMBOL);

  function handleSquareClick(index) {
    if (!board[index]) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
    }
    setCurrentPlayer(
      currentPlayer === PLAYER_1_SYMBOL ? PLAYER_2_SYMBOL : PLAYER_1_SYMBOL
    );
  }

  return (
    <div>
      <Board board={board} onSquareClick={handleSquareClick} />
    </div>
  );
}
