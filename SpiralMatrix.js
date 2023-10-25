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
  maxCol: matrix[0].length - 1,
  minRow: 0,
  maxRow: matrix.length - 1
}

const path = {
  direction: ['EAST', 'SOUTH', 'WEST', 'NORTH'],
  index: 0
}
path.turnRight = function () { this.index = (this.index + 1) % 4; }
path.getDirection = function () { return this.direction[this.index]; }
path.next = function () {
  switch (this.index) {
    case 0: return { row: 0, col: 1 };
    case 1: return { row: 1, col: 0 };
    case 2: return { row: 0, col: -1 };
    case 3: return { row: -1, col: 0 };
  }
}

let answer = [];
let currentRowCol = new Coordinate(matrix[0][0], 0, 0);

spiralOrder(matrix);


function spiralOrder(matrix) {

  answer.push(currentRowCol);

  let nextRowCol = path.next();


  for (let i = 0; answer.length < (matrix.length * matrix[0].length); i++) {
    doSomething(path.next());
  }
  console.log("ANSWER");
  console.log(answer);
}

function doSomething(rowCol) {
  let myChecker = checkBorderLimits(rowCol);
  let noDuplicate = checkAnswerForDuplicate(rowCol);
  if (myChecker && noDuplicate) {
    pushAnswerUpdatePath(rowCol);
  } else {
    path.turnRight();
  }
}

function checkAnswerForDuplicate(rowCol) {
  for (let i = 0; i < answer.length - 1; i++) {
    if ((answer[i].row === currentRowCol.row + rowCol.row) && (answer[i].col === currentRowCol.col + rowCol.col)) {
      return false;
    }
  }
  return true;
}


function checkBorderLimits(rowCol) {
  if ((currentRowCol.row + rowCol.row < borderLimit.minRow) || (currentRowCol.row + rowCol.row > borderLimit.maxRow)) {
    return false;
  }
  if ((currentRowCol.col + rowCol.col < borderLimit.minCol) || (currentRowCol.col + rowCol.col > borderLimit.maxCol)) {
    return false;
  }
  return true;
}

function pushAnswerUpdatePath(rowCol) {
  const row = rowCol.row + currentRowCol.row;
  const col = rowCol.col + currentRowCol.col;

  let temp = new Coordinate(matrix[row][col], row, col);
  answer.push(temp);

  currentRowCol = temp;
}
