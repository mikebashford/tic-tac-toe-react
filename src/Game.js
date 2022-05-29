import React, { useState } from "react";
import Board from "./Board";

const board = ["", "", "", "", "", "", "", "", ""];

const PLAYER_1_SYMBOL = "X";
const PLAYER_2_SYMBOL = "O";

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1_SYMBOL);
  return (
    <div>
      <Board
        board={board}
        onSquareClick={(index) =>
          setCurrentPlayer(
            currentPlayer === PLAYER_1_SYMBOL
              ? PLAYER_2_SYMBOL
              : PLAYER_1_SYMBOL
          )
        }
      />
    </div>
  );
}
