import React, { useState } from "react";
import Board from "./Board";
import WinnerModal from "./WinnerModal";

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

  function getWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const winningCombo = winningCombos.find((combo) => {
      if (
        board[combo[0]] &&
        board[combo[0]] == board[combo[1]] &&
        board[combo[0]] == board[combo[2]]
      ) {
        return true;
      } else {
        return false;
      }
    });
    return winningCombo ? board[winningCombo[0]] : false;
  }

  const winner = getWinner();

  return (
    <div>
      <Board board={board} onSquareClick={handleSquareClick} />
      {winner && <WinnerModal winner={winner} />}
    </div>
  );
}
