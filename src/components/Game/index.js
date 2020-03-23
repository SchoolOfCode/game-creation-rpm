import React, { useState, useEffect } from "react";

import Board from "../Board";
import { calculateWinner } from "../../libs/helpers";
import css from "./Game.module.css";
const initialState = {
  squares: [null, null, null, null, null, null, null, null, null],
  currentPlayer: null,
  winner: null
};

function Game() {
  const [squares, setSquares] = useState(initialState.squares);
  const [currentPlayer, setCurrentPlayer] = useState(
    initialState.currentPlayer
  );
  const [winner, setWinner] = useState(initialState.winner);

  function handleClick(i) {
    if (winner || squares[i]) return;

    const newSquares = [
      ...squares.slice(0, i),
      currentPlayer,
      ...squares.slice(i + 1)
    ];
    setSquares(newSquares);
  }

  useEffect(() => {
    const isAWinner = calculateWinner(squares);
    if (isAWinner) {
      console.log("winner!");
      return setWinner(currentPlayer);
    }
    if (!squares.includes(null)) {
      return console.log("no more moves");
    }
    nextPlayer();
  }, [squares]);

  function nextPlayer() {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }
  function reset() {
    setSquares(initialState.squares);
    setWinner(initialState.winner);
    setCurrentPlayer(initialState.currentPlayer);
  }

  return (
    <div>
      <Board squares={squares} onClick={i => handleClick(i)} />
      <div className={css.displayContainer}>
        {winner ? (
          <>
            <p>
              player <span className={css.winnerCrown}>{winner}</span> wins!
            </p>
            <button onClick={reset}>Play Again?</button>
          </>
        ) : (
          <p>Next player: {currentPlayer}</p>
        )}
      </div>
    </div>
  );
}

export default Game;
// ========================================
