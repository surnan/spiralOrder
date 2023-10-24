



















spiralOrder(matrix);


function luckyNumberColumnChecker(matrix, luckyNumber) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][luckyNumber.col] > luckyNumber.value) {
      return false;
    }
  }
  return true;
}

function luckyNumbers(matrix) {
  // your code here...

  let answer = [];

  class LuckyNumberObject {
    constructor(value, row, col) {
      this.value = value;
      this.row = row;
      this.col = col;
    }
  }

  for (let i = 0; i < matrix.length; i++) {

    //initialize luckyNumber to fist element in row
    let luckyNumber = new LuckyNumberObject(matrix[i][0], i, 0);

    for (j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] < luckyNumber.value) {
        luckyNumber.value = matrix[i][j];
        luckyNumber.col = j;
        luckyNumber.row = i;
      }
    }

    //check if passes Column Tester
    if (luckyNumberColumnChecker(matrix, luckyNumber)) {
      answer.push(luckyNumber.value);
    }
  }
  return answer;
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// class Maze {
//   constructor(matrix) {
//     this.minRow = 0;
//     this.maxRow = matrix.length;
//     this.minCol = 0;
//     this.maxCol = matrix[0].length;
//   }
// }

// class Coordinate {
//   constructor(matrix) {
//     this.row = 0;
//     this.column = 0;
//     this.value = matrix[row][column];

//     this.directionIndex = 0;
//     this.directions = [
//       this.moveEast,
//       this.moveSouth,
//       this.moveWest,
//       this.moveNorth]
//   }
//   moveEast = function () { this.column += 1; }
//   moveSouth = function () { this.row += 1; }
//   moveWest = function () { this.column -= 1; }
//   moveNorth = function () { this.row -= 1; }

//   get getCurrentDirection() {
//     return this.directions[this.directionIndex];
//   }
//   turnRight = function () {
//     this.directionIndex = (this.directionIndex + 1) % 4;
//   }
// }

// class XYObject {
//   constructor(coordinate) {
//     this.x = coordinate.row;
//     this.y = coordinate.col;
//   }
// }

// let boundary = new Maze(matrix);
// let mazePath = new Coordinate();
// let answer = [XYObject];

// function moveForward(myCoord) {
//   console.log('myCoord (row, col)===>', myCoord.row, myCoord.column);

//   for (let i = myCoord.column; i < boundary.maxCol; i++) {
//     myCoord.moveEast();
//     console.log(`\ni=${i} [----] myCoord.moveEast(x,y) ${myCoord.row} ${myCoord.column}`);
//   }

//   for (let i = myCoord.row; i < boundary.maxRow; i++) {
//     myCoord.moveSouth();
//     console.log(`\ni=${i} [----] myCoord.moveSouth(x,y) ${myCoord.row} ${myCoord.column}`);
//   }

//   for (let i = myCoord.column; i > boundary.minCol; i--) {
//     myCoord.moveWest();
//     console.log(`\ni=${i} [----] myCoord.moveWest(x,y) ${myCoord.row} ${myCoord.column}`);
//   }

//   for (let i = myCoord.row; i > boundary.minRow; i--) {
//     myCoord.moveNorth();
//     console.log(`\ni=${i} [----] myCoord.moveNorth(x,y) ${myCoord.row} ${myCoord.column}`);
//   }
// }

// class CoordinateObject {
//   constructor(value, row, col) {
//     this.value = value;
//     this.row = row;
//     this.col = col;
//   }
// }

// class MazeObject {
//   constructor(matrix) {
//     this.minRow = 0;
//     this.maxRow = matrix.length;
//     this.minCol = 0;
//     this.maxCol = matrix[0].length;
//   }

//   isSafe(coordinateObject) {
//     // console.log('isOutside called !!')
//     if ((coordinateObject.row < this.minRow) || (coordinateObject.row > this.maxRow)) { return false }
//     if ((coordinateObject.col < this.minCol) || (coordinateObject.col > this.maxCol)) { return false }
//     return true;
//   }



// }

// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let boundary = new MazeObject(matrix);
// let answer = [CoordinateObject];
// let newCoordinate = CoordinateObject;

// function initFunctions() {
//   answer.push(new CoordinateObject(matrix[0][0], 0, 0));
//   newCoordinate = new CoordinateObject(matrix[0][1], 0, 1);
// }

// function spiralOrder(matrix) {
//   initFunctions();
//   // console.log('answer = ', answer);
//   // console.log('newCoordinate = ', newCoordinate);
//   // console.log('boundary', boundary);

//   // let coordinate1 = new CoordinateObject(12, 12, 1 );
//   // let coordinate2 = new CoordinateObject(10, 1, 11);
//   // let coordinate3 = new CoordinateObject(12, -12, 1 );
//   // let coordinate4 = new CoordinateObject(12, 1, -11 );
//   // console.log("boudary-check - 0", boundary.isOutside(answer[0]));
//   // console.log("boudary-check - 1", boundary.isOutside(coordinate1));
//   // console.log("boudary-check - 2", boundary.isOutside(coordinate2));
//   // console.log("boudary-check - 3", boundary.isOutside(coordinate3));
//   // console.log("boudary-check - 4", boundary.isOutside(coordinate4));
//   solveEverything();
// }

// function solveEverything() {
//   let isBoundaySafe = boundary.isSafe(newCoordinate);
//   let isNotDuplicate = answerCheck(newCoordinate);


//   // if (isPush){answer.push(newCoordinate);} // WRONG TIMING
//   // for (let temp of answer){ console.log("---\n", temp)}
//   let tempFunction = getNewDirection(newCoordinate, isBoundaySafe, isNotDuplicate);
//   // newCoordinate = tempFunction()
// }

// function answerCheck(newCoordinate) {
//   for (let temp of answer) {
//     if ((temp.value === newCoordinate.value) && (temp.row === newCoordinate.row) && (temp.col === newCoordinate.col)) {
//       return false;
//     }
//   }
//   return true;
// }

// function moveEast() { }
// function moveWest() { }
// function moveNorth() { }
// function moveSouth() { }



// function getNewDirection(newCoordinate, isBoundaySafe, isNotDuplicate) {
//   const answerLast = answer[answer.length - 1];

//   if (answerLast.row === newCoordinate.row) {
//     if (answerLast.col < newCoordinate.col) {
//       if (isBoundaySafe && isNotDuplicate) {
//         answer.push(newCoordinate);
//         return moveEast();
//       } else {
//         return moveSouth();
//       }
//     } else {
//       if (isBoundaySafe && isNotDuplicate) {
//         answer.push(newCoordinate);
//         return moveWest();
//       } else {
//         return moveNorth();
//       }
//     }
//   }
//   //we can assume columns matched instead of row
//   if (answerLast.row < newCoordinate.row) {
//     if (isBoundaySafe && isNotDuplicate) {
//       answer.push(newCoordinate);
//       return moveSouth();
//     } else {
//       return moveWest();
//     }
//   } else {
//     if (isBoundaySafe && isNotDuplicate) {
//       answer.push(newCoordinate);
//       return moveNorth();
//     } else {
//       return moveEast();
//     }
//   }
// }
