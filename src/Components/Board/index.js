import React from "react";
import "./board.css";

// function Board() {
//   return (
//     <div class="game-board">
//       <div class="box">100</div>
//       <div class="box1">
//         99
//         <div className="snakeHead"></div>
//       </div>
//       <div class="box">98</div>
//       <div class="box1">97</div>
//       <div class="box">96</div>
//       <div class="box1">95</div>
//       <div class="box">94</div>
//       <div class="box1">
//         93<div className="ladder3" id="ladderT3"></div>
//       </div>
//       <div class="box">92</div>
//       <div class="box1">91</div>

//       <div class="box1">81</div>
//       <div class="box">
//         82<div className="snake2"></div>
//       </div>
//       <div class="box1">83</div>
//       <div class="box">84</div>
//       <div class="box1">
//         85<div className="snakeHead"></div>
//       </div>
//       <div class="box">86</div>
//       <div class="box1">87</div>
//       <div class="box">
//         88<div className="ladder3"></div>
//       </div>
//       <div class="box1">89</div>
//       <div class="box">90</div>

//       <div class="box">80</div>
//       <div class="box1">
//         79<div className="snake2"></div>
//       </div>
//       <div class="box">78</div>
//       <div class="box1">
//         77<div className="snakeBody"></div>
//       </div>
//       <div class="box">76</div>
//       <div class="box1">
//         75<div className="ladder"></div>
//       </div>
//       <div class="box">74</div>
//       <div class="box1">
//         73<div className="ladder3" id="ladderB3"></div>
//       </div>
//       <div class="box">72</div>
//       <div class="box1">
//         71
//         <div className="snakeHead"></div>
//       </div>

//       <div class="box1">61</div>
//       <div class="box">
//         62<div className="snake2"></div>
//       </div>
//       <div class="box1">63</div>
//       <div class="box">64</div>
//       <div class="box1">
//         65<div className="ladder"></div>
//       </div>
//       <div class="box">
//         66<div className="snakeHead"></div>
//       </div>
//       <div class="box1">67</div>
//       <div class="box">68</div>
//       <div class="box1">
//         69
//         <div className="snakeBody"></div>
//       </div>
//       <div class="box">70</div>

//       <div class="box">60</div>
//       <div class="box1">
//         59<div className="snake2"></div>
//       </div>
//       <div class="box">58</div>
//       <div class="box1">
//         57 <div className="ladder"></div>
//       </div>
//       <div class="box">56</div>
//       <div class="box1">55</div>
//       <div class="box">
//         54<div className="snake3"></div>
//       </div>
//       <div class="box1">
//         53
//         <div className="snakeBody"></div>
//       </div>
//       <div class="box">52</div>
//       <div class="box1">51</div>

//       <div class="box1">41</div>
//       <div class="box">
//         42<div className="snake2"></div>
//       </div>
//       <div class="box1">
//         43
//         <div className="ladder" id="bottom"></div>
//       </div>
//       <div class="box">44</div>
//       <div class="box1">45</div>
//       <div class="box">46</div>
//       <div class="box1">
//         47<div className="snakeBody"></div>
//       </div>
//       <div class="box">
//         48 <div className="snake3"></div>
//       </div>
//       <div class="box1">49</div>
//       <div class="box">
//         50
//         <div className="snakeHead"></div>
//       </div>

//       <div class="box">40</div>
//       <div class="box1">
//         39<div className="snake2"></div>
//       </div>
//       <div class="box">38</div>
//       <div class="box1">
//         37
//         <div className="snakeHead"></div>
//       </div>
//       <div class="box">36</div>
//       <div class="box1">
//         35<div className="snakeBody"></div>
//       </div>
//       <div class="box">
//         34 <div className="ladder2"></div>
//       </div>
//       <div class="box1">33</div>
//       <div class="box">32</div>
//       <div class="box1">
//         31
//         <div className="snake2"></div>
//       </div>

//       <div class="box1">21</div>
//       <div class="box">
//         22<div className="snake2"></div>
//       </div>
//       <div class="box1">
//         23
//         <div className="snakeBody"></div>
//       </div>
//       <div class="box">24</div>
//       <div class="box1">
//         25<div className="snakeBody"></div>
//       </div>
//       <div class="box">26</div>
//       <div class="box1">
//         27<div className="ladder"></div>
//       </div>
//       <div class="box">
//         28
//         <div className="ladder2"></div>
//       </div>
//       <div class="box1">29</div>
//       <div class="box">
//         30
//         <div className="snake2"></div>
//       </div>

//       <div className="box">20</div>
//       <div className="box1">
//         19
//         <div className="snakeBody"></div>
//       </div>

//       <div class="box">18</div>
//       <div class="box1">17</div>
//       <div class="box">16</div>
//       <div class="box1">
//         15<div className="ladder"></div>
//       </div>
//       <div class="box">14</div>
//       <div class="box1">13</div>
//       <div class="box">
//         12 <div className="ladder2" id="ladderB2"></div>
//       </div>
//       <div class="box1">11</div>

//       <div className="box1">
//         1<div className="snakeBody"></div>
//       </div>

//       <div class="box">
//         2<div className="snake2" id="longerBit"></div>
//       </div>
//       <div class="box1">3</div>
//       <div class="box">4</div>
//       <div class="box1">
//         5<div className="ladder" id="bottom"></div>
//       </div>
//       <div class="box">6</div>
//       <div class="box1">7</div>
//       <div class="box">8</div>
//       <div class="box1">9</div>
//       <div class="box">10</div>
//     </div>
//   );
// }

const board = Array(10).fill(Array(10).fill(""));
const config = { 9: <div className="snakeBody"></div> };
function Board({ playerPosition }) {
  return (
    <div className="game-board">
      {board.map((row, i) => (
        <div className="row">
          {row.map((square, index) => (
            <div className="box">
              {100 - i * 10 - index}
              {playerPosition === i && "player"}
              {config[i]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
