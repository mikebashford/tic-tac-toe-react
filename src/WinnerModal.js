import React from "react";

export default function WinnerModal({ winner }) {
  return (
    <div className="modal">
      <div className="modal-content">{winner} Wins!</div>
    </div>
  );
}
