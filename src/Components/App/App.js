import React, { useState } from "react";
import "./App.css";
import Board from "../Board";
import Dice from "../Dice/index";

function App() {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [playerPosition2, setPlayerPosition2] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(false);
  const [dice, setDice] = useState(1);

  function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    if (player1Turn) {
      setPlayerPosition(playerPosition + roll);
      setDice(roll);
      console.log(playerPosition);
      console.log(`Rolled ${roll}`);
    } else {
      setPlayerPosition2(playerPosition2 + roll);
      setDice(roll);
      console.log(playerPosition2);
      console.log(`Rolled ${roll}`);
      setPlayer1Turn(!player1Turn);
    }

    // check for SNAKES P1
    if (playerPosition === 37) {
      setPlayerPosition(1);
      console.log("down you go");
    } else if (playerPosition === 42) {
      setPlayerPosition(22);
      console.log("down you go");
    } else if (playerPosition === 59) {
      setPlayerPosition(48);
      console.log("down you go");
    } else if (playerPosition === 71) {
      setPlayerPosition(33);
      console.log("down you go");
    } else if (playerPosition === 85) {
      setPlayerPosition(54);
      console.log("down you go");
    } else if (playerPosition === 99) {
      setPlayerPosition(2);
      console.log("down you go");

      //win condition
    } else if (playerPosition >= 100) {
      console.log("you win!");
      // gameOver()
    }
    //check for LADDERS
    else if (playerPosition === 5) {
      setPlayerPosition(27);
      console.log("up you go!");
    } else if (playerPosition === 14) {
      setPlayerPosition(44);
      console.log("up you go!");
    } else if (playerPosition === 43) {
      setPlayerPosition(75);
      console.log("up you go!");
    } else if (playerPosition === 55) {
      setPlayerPosition(83);
      console.log("up you go!");
    }

    //CHECKS FOR P2
    if (playerPosition2 === 37) {
      setPlayerPosition2(1);
      console.log("down you go");
    } else if (playerPosition2 === 42) {
      setPlayerPosition2(22);
      console.log("down you go");
    } else if (playerPosition2 === 59) {
      setPlayerPosition2(48);
      console.log("down you go");
    } else if (playerPosition2 === 71) {
      setPlayerPosition2(33);
      console.log("down you go");
    } else if (playerPosition2 === 85) {
      setPlayerPosition2(54);
      console.log("down you go");
    } else if (playerPosition2 === 99) {
      setPlayerPosition2(2);
      console.log("down you go");

      //win condition
    } else if (playerPosition2 >= 100) {
      console.log("you win!");
      // gameOver()
    }
    //check for LADDERS
    else if (playerPosition2 === 5) {
      setPlayerPosition2(27);
      console.log("up you go!");
    } else if (playerPosition2 === 14) {
      setPlayerPosition2(44);
      console.log("up you go!");
    } else if (playerPosition2 === 43) {
      setPlayerPosition2(75);
      console.log("up you go!");
    } else if (playerPosition2 === 55) {
      setPlayerPosition2(83);
      console.log("up you go!");
    }
  }
  function movePlayer(index) {}
  const [board, setBoard] = useState([
    { type: "T1", move: "", index: 1 },
    { type: "T6", move: "", index: 2 },
    { type: "-", move: "", index: 3 },
    { type: "-", move: "", index: 4 },
    { type: "-", move: "", index: 5 },
    { type: "-", move: "", index: 6 },
    { type: "-", move: "", index: 7 },
    { type: "-", move: "", index: 8 },
    { type: "-", move: "", index: 9 },
    { type: "-", move: "", index: 10 },
    { type: "-", move: "", index: 11 },
    { type: "-", move: "", index: 12 },
    { type: "-", move: "", index: 13 },
    { type: "-", move: "", index: 14 },
    { type: "-", move: "", index: 15 },
    { type: "-", move: "", index: 16 },
    { type: "-", move: "", index: 17 },
    { type: "-", move: "", index: 18 },
    { type: "-", move: "", index: 19 },
    { type: "-", move: "", index: 20 },
    { type: "-", move: "", index: 21 },
    { type: "T2", move: "", index: 22 },
    { type: "-", move: "", index: 23 },
    { type: "-", move: "", index: 24 },
    { type: "-", move: "", index: 25 },
    { type: "-", move: "", index: 26 },
    { type: "-", move: "", index: 27 },
    { type: "-", move: "", index: 28 },
    { type: "-", move: "", index: 29 },
    { type: "-", move: "", index: 30 },
    { type: "-", move: "", index: 31 },
    { type: "-", move: "", index: 32 },
    { type: "T4", move: "", index: 33 },
    { type: "-", move: "", index: 34 },
    { type: "-", move: "", index: 35 },
    { type: "-", move: "", index: 36 },
    { type: "S1", move: "", index: 37 },
    { type: "-", move: "", index: 38 },
    { type: "-", move: "", index: 39 },
    { type: "-", move: "", index: 40 },
    { type: "-", move: "", index: 41 },
    { type: "S2", move: "", index: 42 },
    { type: "-", move: "", index: 43 },
    { type: "-", move: "", index: 44 },
    { type: "-", move: "", index: 45 },
    { type: "-", move: "", index: 46 },
    { type: "-", move: "", index: 47 },
    { type: "S3", move: "", index: 48 },
    { type: "-", move: "", index: 49 },
    { type: "-", move: "", index: 50 },
    { type: "-", move: "", index: 51 },
    { type: "-", move: "", index: 52 },
    { type: "-", move: "", index: 53 },
    { type: "T5", move: "", index: 54 },
    { type: "-", move: "", index: 55 },
    { type: "-", move: "", index: 56 },
    { type: "-", move: "", index: 57 },
    { type: "-", move: "", index: 58 },
    { type: "S3", move: "", index: 59 },
    { type: "-", move: "", index: 60 },
    { type: "-", move: "", index: 61 },
    { type: "-", move: "", index: 62 },
    { type: "-", move: "", index: 63 },
    { type: "-", move: "", index: 64 },
    { type: "-", move: "", index: 65 },
    { type: "-", move: "", index: 66 },
    { type: "-", move: "", index: 67 },
    { type: "-", move: "", index: 68 },
    { type: "-", move: "", index: 69 },
    { type: "-", move: "", index: 70 },
    { type: "S4", move: "", index: 71 },
    { type: "-", move: "", index: 72 },
    { type: "-", move: "", index: 73 },
    { type: "-", move: "", index: 74 },
    { type: "-", move: "", index: 75 },
    { type: "-", move: "", index: 76 },
    { type: "-", move: "", index: 77 },
    { type: "-", move: "", index: 78 },
    { type: "-", move: "", index: 79 },
    { type: "-", move: "", index: 80 },
    { type: "-", move: "", index: 81 },
    { type: "-", move: "", index: 82 },
    { type: "-", move: "", index: 83 },
    { type: "-", move: "", index: 84 },
    { type: "S5", move: "", index: 85 },
    { type: "-", move: "", index: 86 },
    { type: "-", move: "", index: 87 },
    { type: "-", move: "", index: 88 },
    { type: "-", move: "", index: 89 },
    { type: "-", move: "", index: 90 },
    { type: "-", move: "", index: 91 },
    { type: "-", move: "", index: 92 },
    { type: "-", move: "", index: 93 },
    { type: "-", move: "", index: 94 },
    { type: "-", move: "", index: 95 },
    { type: "-", move: "", index: 96 },
    { type: "-", move: "", index: 97 },
    { type: "-", move: "", index: 98 },
    { type: "S6", move: "", index: 99 },
    { type: "-", move: "", index: 100 }
  ]);

  return (
    <div className="App">
      <button onClick={rollDice}>Roll Dice</button>
      <Board />
      <Dice dice={dice} />
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
