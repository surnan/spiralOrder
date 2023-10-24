matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

class CoordinateObject {
  constructor(value, row, column) {
    this.value = value;
    this.row = row;
    this.col = column;
  }
}

class Boundary {
  constructor(matrix) {
    this.minRow = 0;
    this.minCol = 0;
    this.maxCol = matrix[0].length;
    this.maxRow = matrix.length;
  }
}

class Directions {
  constructor() {
    this.moving = ["EAST", "SOUTH", "WEST", "NORTH"]
    this.movingIndex = 0;
  }

  getDirection() { return this.moving[this.movingIndex]; }
  turnRight() { this.movingIndex = (this.movingIndex + 1) % 4; }
}

var answer = [];
var boundary = new Boundary(matrix);
var currentDirection = new Directions();
var currentCoordinate = new CoordinateObject(matrix[0][0], 0, 0);
answer.push(currentCoordinate);

function spiralOrder(matrix) {

  let temp = currentDirection.getDirection();
  console.log('ENTERING SWITCH!!!');


  switch (temp) {
    case 'EAST':
      console.log('going east!!');
      break;
    case 'SOUTH':
      console.log('going south!!');
      break;
    case 'WEST':
      console.log('going west!!');
      break;
    case 'NORTH':
      console.log('going north!!');
      break;
  }





}


spiralOrder(matrix);
