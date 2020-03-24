import React, { useState } from "react";
import "./App.css";
import Board from "../Board";

function App() {
  const [playerPosition, setPlayerPosition] = useState(0);
  const [playerPosition2, setPlayerPosition2] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(true);

  let ongoingGame = true;

  function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;

    if (player1Turn) {
      console.log(`P1 is on square ${playerPosition}`);
      setPlayerPosition(playerPosition + roll);
      console.log(
        `P1 rolled ${roll}, they are now on square ${playerPosition + roll}`
      );
    } else {
      console.log(`P2 is on square ${playerPosition2}`);
      setPlayerPosition2(playerPosition2 + roll);
      console.log(
        `P2 rolled ${roll}, they are now on square ${playerPosition2 + roll}`
      );
    }
    setPlayer1Turn(!player1Turn);

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
      ongoingGame = false;
      startAnotherGame();
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
      ongoingGame = false;
      startAnotherGame();
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

  function startAnotherGame() {
    const anotherOne = window.confirm("Do you wanna have a rematch?");
    ongoingGame = true;
    anotherOne && rollDice();
  }

  return (
    <div className="App">
      <button onClick={rollDice}>Roll Dice</button>
      <Board />
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
