import Cell from "./Cell";
import { useState } from "react";
import "./Board.css";
import EmptyCell from "./EmptyCell/EmptyCell";
import QueenCell from "./QueenCell/QueenCell";

// let status = [];
// for (let i = 0; i < 4; i++) {
//   let dummy = [];
//   for (let j = 0; j < 4; j++) {
//     dummy.push(".");
//   }
//   status.push(dummy);
// }
let board = [];
function Board(props) {

  console.log("board")
  // const [arr, setArr] = useState([]);
  // const setBoard = (point) => {
  //   setArr(point);
  //   console.log(arr);
  //   sleep(100);
  // };

  // const [num, setNum] = useState(null);
console.log(props)
  let count = 0,
    color;
  for (let i = 0; i < props.n; i++) {
    for (let j = 0; j < props.n; j++) {
      color = (i + j) % 2 == 0 ? true : false;
      board.push(
        props.board[i].charAt(j) === "Q" ? (
          <QueenCell key={count++} bool={color} />
        ) : (
          <EmptyCell key={count++} bool={color} />
        )
      );
    }
  }
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${props.n},100px)` }}
      className="board"
    >
      {board}
    </div>
  );
}
export default Board;

function algo(n, setArr) {}
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
