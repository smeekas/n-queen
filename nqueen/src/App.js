import "./App.css";
import Board from "./Components/Board";

import solveNQueens from "./lc.js";
import { useState, useReducer } from "react";
let status = [];
for (let i = 0; i < 4; i++) {
  let dummy = "";
  for (let j = 0; j < 4; j++) {
    dummy += ".";
  }
  status.push(dummy);
}
const arrreducer = (state, action) => {
  return { arr: action.arr };
};
function App() {
  // console.log("APp")
  // const [arr, setArr] = useState(status);
  const [arrState, dispatchArr] = useReducer(arrreducer, status);
  const setBoard = (board) => {
    // setArr((pev)=>{
    //   return board
    // });
    // console.log(arr)
    dispatchArr({ arr: board });
    sleep(10);
    // console.log(arr)
  };
  const numHandler = () => {
    solveNQueens(n, setBoard);
    // place_next_queen(props.n,props.n,setBoard)
    // nqueen(props.n, setBoard);
    // let number = 0;
    // while (number < props.n * props.n) {
    //   setNum(number);
    //   await timeout(500);
    //   number++;
  };
  let n = 4;
  return (
    <div>
      <Board n={n} board={arrState.arr} />
      <button className="btn" onClick={numHandler}>
        click
      </button>
    </div>
  );
}

export default App;
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
