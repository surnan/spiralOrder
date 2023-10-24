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
  turnRight() { this.movingIndex = (this.movingIndex + 1) % this.moving.length; }
}

var answer = [];
var boundary = new BoundaryObject(matrix);
var currentDirection = new DirectionsObject();
var currentCoordinate = new CoordinateObject(matrix[0][0], 0, 0);
answer.push(currentCoordinate);

function checkCoordBounds(newRow, newCol) {
  if ((newRow < boundary.minRow) || (newRow > boundary.maxRow)) {
    console.log('row failed checkbounds');
    return false;
  }

  if ((newCol < boundary.minCol) || (newCol > boundary.maxCol)) {
    console.log('col failed checkbounds');
    return false;
  }
  return true;
}

function checkNoDuplicate(newRow, newCol) {
  let duplicate = true;
  // console.log("newRow, newCol",newRow, newCol);
  // answer.forEach((ele) => {
  //   console.log("ele.row, ele.col",ele.row, ele.col);
  //   if ((ele.row === newRow) && (ele.col === newCol)) {
  //     console.log('duplicate fail');
  //     duplicate = false; }
  // });
  return duplicate;
}

function spiralOrder(matrix) {

  let temp = currentDirection.getDirection();
  let checkBounds;
  let checkDuplicate;

  // console.log("ANSWER B4 FOR-LOOP", answer, "\n");
  for (let i = 1; i < 3; i++) {
    console.log("\n", i,"----");
    console.log("currentCoordinate", currentCoordinate);

    temp = currentDirection.getDirection();


    switch (temp) {
      case 'EAST':
        checkBounds     = checkCoordBounds(currentCoordinate.row, currentCoordinate.col + 1);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row, currentCoordinate.col + 1);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('EAST - PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
      case 'SOUTH':
        checkBounds     = checkCoordBounds(currentCoordinate.row + 1, currentCoordinate.col);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row + 1, currentCoordinate.col);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('SOUTH - PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
      case 'WEST':
        checkBounds     = checkCoordBounds(currentCoordinate.row, currentCoordinate.col - 1);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row, currentCoordinate.col - 1);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('WEST - PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
      case 'NORTH':
        checkBounds     = checkCoordBounds(currentCoordinate.row - 1, currentCoordinate.col);
        checkDuplicate  = checkNoDuplicate(currentCoordinate.row - 1, currentCoordinate.col);
        if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
          console.log('NORTH - PUSH!!')
        } else {
          currentDirection.turnRight();
          console.log('Turn Right :(');
        }
        break;
    }

  }
}

function tryPush(checkBounds, checkDuplicate, row, col) {
  if (checkBounds && checkDuplicate) {
    let temp = new CoordinateObject(matrix[row][col], row % matrix.length, col % matrix[0].length);
    answer.push(temp);
    console.log('temp', temp);
    console.log('answer --> ', answer);
    return true
  }
  // let temp2 = answer[answer.length-1];
  // currentCoordinate.value = temp2.value;
  // currentCoordinate.row = temp2.row;
  // currentCoordinate.col = temp2.col;

  // console.log("temp2",temp2);
  // console.log('answer --> ', answer);
  return false;
}


spiralOrder(matrix);
