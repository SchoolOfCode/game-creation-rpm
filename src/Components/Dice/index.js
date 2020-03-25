import React from "react";
// import dice1 from "./dice1.svg";
// import dice2 from "./dice2.svg";
// import dice3 from "./dice3.svg";
// import dice4 from "./dice4.svg";
// import dice5 from "./dice5.svg";
// import dice6 from "./dice6.svg";

function Dice({ dice }) {
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
    />
  );
}

export default Dice;
