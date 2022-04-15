var solveNQueens = function (n, setBoard) {
  let res = [];
  solver(0, [], n, res, setBoard);
  return res;
};
// let itr = 0;
function solver(cur_row, colPlacements, n, res, setBoard) {
  if (cur_row === n) {
    let board = generateBoard(n, colPlacements);
    res.push(board);
    return;
  }
  for (let col = 0; col < n; col++) {
    colPlacements.push(col);
    setBoard(generateBoard(n,colPlacements))
   
    // itr++;

    if (isValid(colPlacements)) {
      solver(cur_row + 1, colPlacements, n, res, setBoard);
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
  return board;
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
// solveNQueens(4);
//   console.log(`-------------------\n iter: ${itr}`)
//   console.log(ans)
export default solveNQueens;
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }