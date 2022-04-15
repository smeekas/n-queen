import { useState, useEffect, useReducer } from "react";
// import { sleep } from "atomic-sleep";
import "./Board.css";
import EmptyCell from "./EmptyCell/EmptyCell";
import QueenCell from "./QueenCell/QueenCell";
import store from "../store/index";
import { observer } from "mobx-react";

const arr = ["....", "....", "....", "...."];

const Board = observer((props) => {
  // const queens = useSelector((state) => state.queen);
  // console.log(queens);

  let id, color;

  const runHandler = () => {
    // place_next_queen(4, 4, []);
    solveNQueens(4);
  };


  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function solveNQueens(n) {
    let res = [];
    solver(0, [], n, res);
    return res;
  }
  // let itr = 0;
  async function solver(cur_row, colPlacements, n, res) {
    if (cur_row === n) {
      let board = generateBoard(n, colPlacements);
      console.log(board)
      res.push(board);
      return;
    }
    for (let col = 0; col < n; col++) {
      colPlacements.push(col);
      // (colPlacements);
      // sleep(100);
      // itr++;
      generateBoard(n, colPlacements);
      await sleep(500)
      
      if (isValid(colPlacements)) {
        solver(cur_row + 1, colPlacements, n, res);
      }
  
      colPlacements.pop();
    }
  }
  
  function generateBoard(n, colPlacements) {
    let board = [];
    for (let row = 0; row < n; row++) {
      let board_row = [];
      for (let col = 0; col < n; col++) {
        if (col === colPlacements[row]) {
          board_row.push("Q");
        } else {
          board_row.push(".");
        }
      }
      board.push(board_row.join(""));
    }
  
    // store.dispatch({ type: "change", queen: board });
    props.store.moveQueen(board)
    
  
    // await sleep(200);
  }
  
  function isValid(colPlacements) {
    let n = colPlacements.length;
    let cur_row = n - 1;
  
    for (let row = 0; row < cur_row; row++) {
      let colDistance = Math.abs(colPlacements[cur_row] - colPlacements[row]);
      let rowDistance = cur_row - row;
      if (colDistance === 0 || rowDistance === colDistance) {
        return false;
      }
    }
    return true;
  }
  










  return (
    <div>
      <div
        style={{
          width: `${+props.n * 80}px`,
          height: `${+props.n * 80}px`,
          gridTemplate: `repeat(${props.n},1fr)/repeat(${props.n},1fr)`,
        }}
        className="board"
      >
        {props.store.queens.map((item, i) => {
          return [
            ...[...item].map((cells, j) => {
              color = (i + j) % 2 == 0 ? true : false;
              id = Math.random().toString();
              return cells === "Q" ? (
                <QueenCell bool={color} i={i} j={j} key={id} />
              ) : (
                <EmptyCell bool={color} key={id} />
              );
            }),
          ];
        })}
      </div>
      <button onClick={runHandler}>run</button>
      <div id="poss"></div>
    </div>
  );
});
export default Board;

// async function sleep(milliseconds) {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }

//!

var has_conflict = function (columns) {
  var len = columns.length,
    last = columns[len - 1],
    previous = len - 2;

  while (previous >= 0) {
    if (columns[previous] === last) return true;
    if (last - (len - 1) === columns[previous] - previous) return true;
    if (last + (len - 1) === columns[previous] + previous) return true;
    previous--;
  }

  return false;
};

 function place_next_queen(total, queens, columns) {
  if (queens === 0) return columns;
  columns = columns || [];

  for (var column = 0; column < total; column++) {
    columns.push(column);
    // setBoard(columns);
    // setBoard(generateBoard(total,columns))

    // sleep(100);
    // generateBoard(total, columns);
    //  sleep(200);
    // iterations++;
    if (
      !has_conflict(columns) &&
      place_next_queen(total, queens - 1, columns)
    ) {
      return columns;
    }
    columns.pop(column);
  }

  return null;
}

//!

