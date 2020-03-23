import React from "react";

import Square from "../Square";
import css from "./Board.module.css";

function Board({ squares, onClick }) {
  return (
    <div className={css.board}>
      {squares.map((player, i) => (
        <Square key={i} value={player} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
