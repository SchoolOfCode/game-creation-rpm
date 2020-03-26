import React from "react";
import "./dice.css";

function Dice({ dice, onClick }) {
  return (
    <img
      style={{ width: "50px" }}
      src={(() => {
        switch (dice) {
          case 1:
            return require("./dice1.svg");
          case 2:
            return require("./dice2.svg");
          case 3:
            return require("./dice3.svg");
          case 4:
            return require("./dice4.svg");
          case 5:
            return require("./dice5.svg");
          case 6:
            return require("./dice6.svg");
          default:
            return;
        }
      })()}
      alt="dice"
      onClick={onClick}
      className="dice"
    />
  );
}

export default Dice;
