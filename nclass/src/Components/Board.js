// import { useState, useEffect, useReducer } from "react";
import React, { Children } from "react";
import "./Board.css";
import EmptyCell from "./EmptyCell/EmptyCell";
import QueenCell from "./QueenCell/QueenCell";

// let initialBoard = [];
// const arrReducer = (state, action) => {
//   return { queens: action.val };
// };
// function Board(props) {
//   let status = ["....", "....", "....", "...."];
//   const [arrState, dispatchArr] = useReducer(arrReducer, { queens: status });
//   const [arr, setArr] = useState(status);
//   const [pos, setPos] = useState([]);
//   const setBoard = (newBoard) => {
//     setArr(newBoard);
//     // sleep(100);
//     // dispatchArr({ val: newBoard });
//     // console.log(pos);
//   };

//   let id, color;
//   // arr.forEach((curr, index) => {
//   //   let strlen = curr.length,
//   //     i = 0;
//   //   while (i < strlen) {
//   //     color = (i + index) % 2 == 0 ? true : false;
//   //     id = Math.random().toString();
//   //     initialBoard.push(
//   //       curr[i] === "." ? (
//   //         <EmptyCell key={id} bool={color} />
//   //       ) : (
//   //         <QueenCell key={id} bool={color} />
//   //       )
//   //     );
//   //     i++;
//   //   }
//   // });
//   // for (let i = 0; i < props.n; i++) {
//   //   for (let j = 0; j < props.n; j++) {
//   //     color = (i + j) % 2 == 0 ? true : false;
//   //     id = Math.random().toString();
//   //     initialBoard.push(
//   //       arr[i][j] === "." ? (
//   //         <EmptyCell key={id} bool={color} />
//   //       ) : (
//   //         <QueenCell key={id} bool={color} />
//   //       )
//   //     );
//   //   }
//   // }

//   const runHandler = () => {
//     // solveNQueens(4, setBoard);
//     // place_next_queen(4,4,[],setBoard)
//     hundred()
//   };
//   // { gridTemplateColumns: `repeat(${props.n},80px)`,gridTemplateRows:`repeat(${props.n},80px)` }
//   return (
//     <div>
//       <div
//         style={{
//           width: `${+props.n * 80}px`,
//           height: `${+props.n * 80}px`,
//           gridTemplate: `repeat(${props.n},1fr)/repeat(${props.n},1fr)`,
//         }}
//         className="board"
//       >
//         {arrState.queens.map((item, i) => {
//           return [
//             ...[...item].map((cells, j) => {
//               color = (i + j) % 2 == 0 ? true : false;
//               id = Math.random().toString();

//               return arr[i][j] === "." ? (
//                 <EmptyCell key={id} bool={color} />
//               ) : (
//                 <QueenCell key={id} bool={color} />
//               );
//             }),
//           ];
//         })}
//         {/* {initialBoard} */}
//       </div>
//       <button onClick={runHandler}>run</button>
//       <div id="poss"></div>
//     </div>
//   );
// }
// export default Board;

class Board extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // n: this.props.n,
      arr: ["....", "....", "....", "...."],
    };
  }
  setChess(newBrd) {
    //set arr in state
    // console.log(newBrd);
    this.setState({
      arr: newBrd,
    });

    // console.log(this.state.arr)
  }
  btnhandler() {
    //run algo
    // console.log(this)
    if (this.props.algo) {
      this.place_next_queen(this.props.n, this.props.n, []);
    }
    // console.log("clicked")
  }
  sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  has_conflict(columns) {
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
  }

  //?
  generateBoard(n, colPlacements) {
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
    // return board;
    this.setChess(board);
  }
  //?

  //!!!!!!!!
  place_next_queen(total, queens, columns) {
    if (queens === 0) return columns;
    columns = columns || [];

    for (var column = 0; column < total; column++) {
      columns.push(column);
      this.generateBoard(total, columns);
      // this.sleep(100);
      // iterations++;
      if (
        !this.has_conflict(columns) &&
        this.place_next_queen(total, queens - 1, columns)
      ) {
        return columns;
      }
      columns.pop(column);
    }

    return null;
  }
  //!!!!!!!!!

  render() {
    let id, color;
    return (
      <div>
        <div
          style={{
            width: `${+this.props.n * 80}px`,
            height: `${+this.props.n * 80}px`,
            gridTemplate: `repeat(${this.props.n},1fr)/repeat(${this.props.n},1fr)`,
          }}
          className="board"
        >
          {this.state.arr.map((item, i) => {
            return [
              ...[...item].map((cells, j) => {
                color = (i + j) % 2 === 0 ? true : false;
                id = Math.random().toString();

                return cells === "." ? (
                  <EmptyCell key={id} bool={color} />
                ) : (
                  <QueenCell key={id} bool={color} />
                );
              }),
            ];
          })}
          {/* {initialBoard} */}
        </div>
        <button className="runBtn" onClick={this.btnhandler.bind(this)}>run</button>
      </div>
    );
  }
}
export default Board;

//!
// var has_conflict = function (columns) {
//   var len = columns.length,
//     last = columns[len - 1],
//     previous = len - 2;

//   while (previous >= 0) {
//     if (columns[previous] === last) return true;
//     if (last - (len - 1) === columns[previous] - previous) return true;
//     if (last + (len - 1) === columns[previous] + previous) return true;
//     previous--;
//   }

//   return false;
// };

// var place_next_queen = function (total, queens, columns, setBoard) {
//   if (queens === 0) return columns;
//   columns = columns || [];

//   for (var column = 0; column < total; column++) {
//     columns.push(column);
//     setBoard(columns);
//     sleep(100);
//     // iterations++;
//     if (
//       !has_conflict(columns) &&
//       place_next_queen(total, queens - 1, columns, setBoard)
//     ) {
//       return columns;
//     }
//     columns.pop(column);
//   }

//   return null;
// };

//!

// var solveNQueens = function (n, setBoard) {
//   let res = [];
//   solver(0, [], n, res, setBoard);
//   return res;
// };
// // let itr = 0;
// function solver(cur_row, colPlacements, n, res, setBoard) {
//   if (cur_row === n) {
//     let board = generateBoard(n, colPlacements);
//     res.push(board);
//     return;
//   }
//   for (let col = 0; col < n; col++) {
//     colPlacements.push(col);
//     setBoard(colPlacements);
//     // sleep(100);
//     // itr++;

//     if (isValid(colPlacements)) {
//       solver(cur_row + 1, colPlacements, n, res, setBoard);
//     }

//     colPlacements.pop();
//   }
// }

// function generateBoard(n, colPlacements) {
//   let board = [];
//   for (let row = 0; row < n; row++) {
//     let board_row = [];
//     for (let col = 0; col < n; col++) {
//       if (col === colPlacements[row]) {
//         board_row.push("Q");
//       } else {
//         board_row.push(".");
//       }
//     }
//     board.push(board_row.join(""));
//   }
//   return board;
// }

// function isValid(colPlacements) {
//   let n = colPlacements.length;
//   let cur_row = n - 1;

//   for (let row = 0; row < cur_row; row++) {
//     let colDistance = Math.abs(colPlacements[cur_row] - colPlacements[row]);
//     let rowDistance = cur_row - row;
//     if (colDistance === 0 || rowDistance === colDistance) {
//       return false;
//     }
//   }
//   return true;
// }
