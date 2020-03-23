import React, { useState } from "react";
import "./App.css";
import Board from "../Board";

function rollDice() {
  let roll = Math.floor(Math.Random() * 6) + 1;
  return `Rolled ${roll}`;
}

function movePlayer(index) {}

function App() {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [board, setBoard] = useState([
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "L", move: movePlayer(4) },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" },
    { type: "-", move: "" }
  ]);
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;

// an array of 100 squares
// each square is an object with values:
//      - type: "snake, ladder, normal"
//      - if snake/ladder, link to index that it will move too
