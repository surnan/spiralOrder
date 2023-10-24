matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

class CoordinateObject {
  constructor(value, row, col) {
    this.value = value;
    this.row = row;
    this.col = col;
  }
}

class BoundaryObject {
  constructor(matrix) {
    this.minRow = 0;
    this.minCol = 0;
    this.maxCol = matrix[0].length;
    this.maxRow = matrix.length;
  }
}

class DirectionsObject {
  constructor() {
    this.moving = ["EAST", "SOUTH", "WEST", "NORTH"]
    this.movingIndex = 0;
  }
  getDirection() { return this.moving[this.movingIndex]; }
  turnRight() { this.movingIndex = (this.movingIndex + 1) % 4; }
}

var answer = [];
var boundary = new BoundaryObject(matrix);
var currentDirection = new DirectionsObject();
var currentCoordinate = new CoordinateObject(matrix[0][0], 0, 0);
answer.push(currentCoordinate);

function spiralOrder(matrix) {

  let temp = currentDirection.getDirection();

  switch (temp) {
    case 'EAST':
      console.log('going east!!');
      const checkBounds     = checkCoordBounds(currentCoordinate.row, currentCoordinate.col+1);
      const checkDuplicate  = checkNoDuplicate(currentCoordinate.row, currentCoordinate.col+1);
      turnRightOrPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col+1);
      break;
    case 'SOUTH':
      console.log('going south!!');
      checkCoordBounds(currentCoordinate.row + 1, currentCoordinate.col);
      checkNoDuplicate(currentCoordinate.row + 1, currentCoordinate.col);
      turnRightOrPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col+1);
      break;
    case 'WEST':
      console.log('going west!!');
      checkCoordBounds(currentCoordinate.row, currentCoordinate.col-1);
      checkNoDuplicate(currentCoordinate.row, currentCoordinate.col-1);
      turnRightOrPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col+1);
      break;
    case 'NORTH':
      console.log('going north!!');
      checkCoordBounds(currentCoordinate.row - 1, currentCoordinate.col);
      checkNoDuplicate(currentCoordinate.row - 1, currentCoordinate.col);
      turnRightOrPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col+1);
      break;
  }
}

function turnRightOrPush(checkBounds, checkDuplicate, row, col){
  console.log('\n\ncheckBounds', checkBounds);
  console.log('checkDuplicate', checkDuplicate);
  console.log('row', row);
  console.log('col', col);
}

function checkCoordBounds(newRow, newCol){
  if ((newRow < boundary.minRow) || (newRow > boundary.maxRow)) {
    return false;
  }

  if ((newCol < boundary.minCol) || (newCol > boundary.maxCol)) {
    return false;
  }
  return true;
}

function checkNoDuplicate(newRow, newCol){
  let duplicate = false;
  answer.forEach((ele) => {
    if ((ele.row === newRow) && (ele.col === newCol)) {duplicate = true;}
  });
  return duplicate;
}

spiralOrder(matrix);
