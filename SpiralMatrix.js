matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

function Coordinate(value, row, col) {
  this.value = value;
  this.row = row;
  this.col = col
}

const borderLimit = {
  minCol: 0,
  minRow: 0,
  maxCol: matrix[0].length - 1,
  maxRow: matrix.length - 1
}

const path = {
  direction: ['EAST', 'SOUTH', 'WEST', 'NORTH'], //Readability.  Not used.
  index: 0
}
path.turnRight = function () { this.index = (this.index + 1) % 4; }
path.next = function () {
  switch (this.index) {
    case 0: return { row: 0, col: 1 };
    case 1: return { row: 1, col: 0 };
    case 2: return { row: 0, col: -1 };
    case 3: return { row: -1, col: 0 };
  }
}

function checkDuplicate(rowCol, answer) {
  const newRow = rowCol.row + currentRowCol.row;
  const newCol = rowCol.col + currentRowCol.col;

  //'return' won't break function out of FOREACH()
  for (let i = 0; i < answer.length - 1; i++) {
    if ((answer[i].row === newRow) && (answer[i].col === newCol)) {
      return false;
    }
  }
  return true;
}

function checkBounds(rowCol) {
  let newCol = currentRowCol.col + rowCol.col;
  let newRow = currentRowCol.row + rowCol.row;

  if ((newRow < borderLimit.minRow) || (newRow > borderLimit.maxRow)) {
    return false;
  }
  if ((newCol < borderLimit.minCol) || (newCol > borderLimit.maxCol)) {
    return false;
  }
  return true;
}

function pushAnswerUpdatePath(rowCol, answer) {
  const newRow = rowCol.row + currentRowCol.row;
  const newCol = rowCol.col + currentRowCol.col;
  currentRowCol = new Coordinate(matrix[newRow][newCol], newRow, newCol);
  answer.push(currentRowCol);
}

function spiralOrder(matrix) {
  let answer = [];

  answer.push(currentRowCol);
  for (let i = 0; answer.length < (matrix.length * matrix[0].length); i++) {
    (checkBounds(path.next())&& checkDuplicate(path.next(), answer)) ?
                      pushAnswerUpdatePath(path.next(), answer) : path.turnRight();
  }
  console.log("ANSWER");
  console.log(answer);
}

//MAIN ()
// let answer = [];
let currentRowCol = new Coordinate(matrix[0][0], 0, 0);
spiralOrder(matrix);
