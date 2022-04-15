async function nqueen(n, setBoard) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp.push(".");
  }
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push(temp);
  }
  let res = [];
  
  dfs(0, board, res, setBoard);
  // return res;
}
async function dfs(col, board, res, setBoard) {
  if (col == board.length) {
    res.push(await construct(board));
    return;
  }
  for (let row = 0; row < board.length; row++) {
    if (await validate(board, row, col)) {
      board[row][col] = "Q";
      await setBoard(board);
      // timeout(500);
      const dump = await dfs(col + 1, board, res, setBoard);
      board[row][col] = ".";
      await setBoard(board);
      // timeout(500);
    }
  }
}
async function construct(board) {
  let res = [];
  for (let i = 0; i < board.length; i++) {
    res.push(board[i]);
  }
  return res;
}
async function validate(board, row, col) {
  let duprow = row,
    dupcol = col;
  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") return false;
    row--;
    col--;
  }

  row = duprow;
  col = dupcol;
  while (col >= 0) {
    if (board[row][col] == "Q") return false;
    col--;
  }
  row = duprow;
  col = dupcol;
  while (col >= 0 && row < board.length) {
    if (board[row][col] == "Q") return false;
    col--;
    row++;
  }
  return true;
}
// nqueen(4).then(res=>{
//     console.log(res)
// })
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}
// nqueen(4,()=>{});
export default nqueen;
// var solveNQueens = function(n,setArr) {
//     var res = [];
//     if (n === 1 || n >= 4) dfs(res, [], n, 0,setArr);
//     console.log(res)
//     // return res;
//   };

//   var dfs = function (res, points, n, index,setArr) {
//     for (var i = index; i < n; i++) {
//       if (points.length !== i) return;
//       for (var j = 0; j < n; j++) {
//         if (isValid(points, [i, j])) {
//           points.push([i, j]);
//           dfs(res, points, n, i + 1);
//           if (points.length === n) res.push(buildRes(points));
//           points.pop();
//         }
//       }
//     }
//   };

//   var buildRes = function (points) {
//     var res = [];
//     var n = points.length;
//     for (var i = 0; i < n; i++) {
//       res[i] = '';
//       for (var j = 0; j < n; j++) {
//         res[i] += (points[i][1] === j ? 'Q' : '.');
//       }
//     }
//     return res;
//   };

//   var isValid = function (oldPoints, newPoint) {
//     var len = oldPoints.length;
//     for (var i = 0; i < len; i++) {
//       if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
//       if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
//     }
//     return true;
//   };
//   solveNQueens(4);
//   export default solveNQueens;
