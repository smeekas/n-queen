var iterations = 0;

var print_board = function (columns,total) {
  var n = total,
    row = 0,
    col = 0;
  while (row < n) {
    while (col < n) {
      process.stdout.write(columns[row] === col ? "Q " : "# ");
      col++;
    }

    process.stdout.write("\n");
    col = 0;
    row++;
  }
  console.log("\n");
  // sleep(10)
};

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
const res=[];
var place_next_queen =  function (total, queens, columns) {
  if (queens === 0){
    res.push(columns);
    let temp=columns[0];
    columns=[temp+1];
    queens=total;
  };
  columns = columns || [];

  for (var column = 0; column < total; column++) {
    columns.push(column);
    //  await timeout(1000);
    console.log(`--------------------\ncolumn: ${column}\n columns: ${columns}\n queens: ${queens}\n`)
    print_board(columns,total);
    iterations++;
    if (
      !has_conflict(columns) &&
      place_next_queen(total, queens - 1, columns)
    ) {
      return columns;
    }
    columns.pop(column);
  }

  return null;
};
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

print_board(place_next_queen(4, 4),4);
console.log(res);
// console.log("\niterations: ", iterations);
// export default place_next_queen;
