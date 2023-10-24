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

function checkCoordBounds(newRow, newCol) {
  if ((newRow < boundary.minRow) || (newRow > boundary.maxRow)) {
    return false;
  }

  if ((newCol < boundary.minCol) || (newCol > boundary.maxCol)) {
    return false;
  }
  return true;
}

function checkNoDuplicate(newRow, newCol) {
  let duplicate = true;
  answer.forEach((ele) => {
    if ((ele.row === newRow) && (ele.col === newCol)) { duplicate = false; }
  });
  return duplicate;
}

function spiralOrder(matrix) {

  let temp = currentDirection.getDirection();
  let checkBounds;
  let checkDuplicate;

  for (let i = 0; i < 5; i++) {

    temp = currentDirection.getDirection();

    switch (temp) {
      case 'EAST':
        console.log('going east!!');
        checkBounds     = checkCoordBounds(currentCoordinate.row, currentCoordinate.col + 1);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row, currentCoordinate.col + 1);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
      case 'SOUTH':
        console.log('going south!!');
        checkBounds     = checkCoordBounds(currentCoordinate.row + 1, currentCoordinate.col);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row + 1, currentCoordinate.col);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
      case 'WEST':
        console.log('going west!!');
        checkBounds     = checkCoordBounds(currentCoordinate.row, currentCoordinate.col - 1);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row, currentCoordinate.col - 1);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
      case 'NORTH':
        console.log('going north!!');
        checkBounds     = checkCoordBounds(currentCoordinate.row - 1, currentCoordinate.col);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row - 1, currentCoordinate.col);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
    }
    console.log('answer', answer, "\n\n\n");
  }
}



function tryPush(checkBounds, checkDuplicate, row, col) {
  // console.log('\n\ncheckBounds', checkBounds);
  // console.log('checkDuplicate', checkDuplicate);
  // console.log('row', row);
  // console.log('col', col);

  if (checkBounds && checkDuplicate) {
    let temp = new CoordinateObject(matrix[row][col], row, col);
    answer.push(temp);
    return true
  }
  return false;
}


spiralOrder(matrix);
