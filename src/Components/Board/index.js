import React from "react";
import "./board.css";

const board = Array(10).fill(Array(10).fill(""));
const config = {
  1: <div className="snakeBody"></div>,
  2: <div className="snake2" id="longerBit"></div>,
  5: <div className="ladder" id="bottom"></div>,
  12: <div className="ladder2" id="ladderB2"></div>,
  15: <div className="ladder"></div>,
  19: <div className="snakeBody"></div>,
  22: <div className="snake2"></div>,
  23: <div className="snakeBody"></div>,
  25: <div className="snakeBody"></div>,
  27: <div className="ladder"></div>,
  28: <div className="ladder2"></div>,
  30: <div className="snake2"></div>,
  31: <div className="snake2"></div>,
  34: <div className="ladder2"></div>,
  35: <div className="snakeBody"></div>,
  37: <div className="snakeHead"></div>,
  39: <div className="snake2"></div>,
  42: <div className="snake2"></div>,
  43: <div className="ladder" id="bottom"></div>,
  47: <div className="snakeBody"></div>,
  48: <div className="snake3"></div>,
  50: <div className="snakeHead"></div>,
  53: <div className="snakeBody"></div>,
  54: <div className="snake3"></div>,
  57: <div className="ladder"></div>,
  59: <div className="snake2"></div>,
  62: <div className="snake2"></div>,
  65: <div className="ladder"></div>,
  66: <div className="snakeHead"></div>,
  69: <div className="snakeBody"></div>,
  71: <div className="snakeHead"></div>,
  73: <div className="ladder3" id="ladderB3"></div>,
  75: <div className="ladder"></div>,
  77: <div className="snakeBody"></div>,
  79: <div className="snake2"></div>,
  82: <div className="snake2"></div>,
  85: <div className="snakeHead"></div>,
  88: <div className="ladder3"></div>,
  93: <div className="ladder3" id="ladderT3"></div>,
  99: <div className="snakeHead"></div>
};

function Board({ playerPosition, playerPosition2 }) {
  const circle = require("./circle.svg");
  const circle2 = require("./circle2.svg");
  return (
    <div className="game-board">
      {board.map((row, i) => (
        <div className="row">
          {row.map((square, index) => {
            const squareNumber = 100 - i * 10 - index;
            return (
              <div className="box">
                {squareNumber} <br />
                {playerPosition === squareNumber && (
                  <img src={circle} alt="p1 counter" className="counter" />
                )}
                {playerPosition2 === squareNumber && (
                  <img src={circle2} alt="p2 counter" className="counter" />
                )}
                {config[squareNumber]}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
