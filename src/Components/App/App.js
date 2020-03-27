import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "../Board";
import Dice from "../Dice/index";

const entities = [
  { type: "snake", start: 15, end: 4 },
  { type: "ladder", start: 10, end: 99 }
];

const movements = {
  37: 1,
  50: 30,
  66: 48,
  71: 25,
  85: 77,
  99: 2,
  5: 27,
  12: 34,
  43: 75,
  73: 93
};

const initialPositions = {
  playerPosition: 0,
  playerPosition2: 0
};

function App() {
  const [playerPositions, setPlayerPositions] = useState(initialPositions);
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [dice, setDice] = useState(1);

  function restartGame() {
    setPlayerPositions(initialPositions);
    setPlayer1Turn(true);
  }

  function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);
  }

  useEffect(() => {
    const player = player1Turn ? "playerPosition" : "playerPosition2";
    const rollToPosition = playerPositions[player] + dice;
    const finalPosition = movements[rollToPosition] || rollToPosition;

    setPlayerPositions({
      ...playerPositions,
      [player]: finalPosition
    });
    setPlayer1Turn(!player1Turn);
  }, [dice]);

  const { playerPosition, playerPosition2 } = playerPositions;
  return (
    <div className="App">
      <h1>Snakes & Ladders</h1>
      <Dice dice={dice} onClick={rollDice} /> <br />
      <p>Player 1: Square {playerPosition}</p>
      <p>Player 2: Square {playerPosition2}</p>
      <Board
        playerPosition={playerPosition}
        playerPosition2={playerPosition2}
        entities={entities}
      />
    </div>
  );
}

export default App;

/*
BOARD:
100 SQUARES, EVERY TEN SQUARES IS A NEW ROW

each square could be: nothing/null, could be a player in there OR could be snake/ladder

each snake will have a 'head' and 'tail'. "S" to represent head, "T" to represent tail.
S1 T1, S2 T2, LS1 LE1

seperate state for 'player', which remembers a number. When you get to certain number

player starts at [0]. 

add dice score

check player position on board to se if there is a snake or a ladder


HOW TO 'MOVE' A PLAYER 
- PLAYER 1 starts at square 1 (index [0] in the array)
- Roll dice, roll dice function gives us a number between 1 - 6
- add 'DICESCORE' to the index of player 1. Player moves up the 'board' (Array) based on it's index.
- perhaps would need a peice of state to represent the player's position (index). 
- e.g.
- function movePlayer(playerPosition, roll){
   const newPosition = playerPosition + roll
   setPlayerPosition(newPosition)
}
- playerPosition = board[playerPosition]

HOW TO CHECK FOR A WINNER
- when a player gets to sqaure 100 (index[99] of board array) the game is won.


HOW TO MOVE A SNAKE OR LADDER
- IF a player lands on a snake or a ladder a function is called that changes 'playerPosition'.
- e.g if it's a snake on the board. playerPosition might 

*/
