matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function Coordinate(value, row, col) {
  this.value = value;
  this.row = row;
  this.col = col
}

const borderLimit = {
  minCol: 0,
  maxCol: matrix[0].length,
  minRow: 0,
  maxRow: matrix.length
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


  for (let i = 0; i < 3; i++) {
    switch (path.getDirection()) {
      case 'EAST':
        console.log('EAST!');
        doSomething(path.next());
        break;
      case 'SOUTH':
        console.log('SOUTH!');
        doSomething(path.next());
        break;
      case 'WEST':
        console.log('WEST!');
        doSomething(path.next());
        break;
      case 'NORTH':
        console.log('NORTH!');
        doSomething(path.next());
        break;
    }
    console.log('i = ' + i + '    answer = ', answer, "\n");

    // console.log("1 - path.next() ->", path.next(),path.getDirection(), "\n");

    // path.turnRight();
    // console.log("2 - path.next() ->", path.next(),path.getDirection(), "\n");

    // path.turnRight();
    // console.log("3 - path.next() ->", path.next(), path.getDirection(), "\n");

    // path.turnRight();
    // console.log("4 - path.next() ->", path.next(), path.getDirection(), "\n");
  }
}

function doSomething(rowCol){
  let myChecker = checkBorderLimits(rowCol);
  if (myChecker){
    pushAnswerUpdatePath(rowCol);
  } else {
    path.turnRight();
  }
}

function pushAnswerUpdatePath(rowCol){
  const row = rowCol.row + currentRowCol.row;
  const col = rowCol.col + currentRowCol.col;

  let temp = new Coordinate(matrix[row][col], row, col);
  answer.push(temp);

  currentRowCol = temp;
}

function checkBorderLimits(rowCol) {
  // if ((currentRowCol.row + coord.row < borderLimit.minRow) || (currentRowCol.row + coord.row > borderLimit.maxRow)) {
  //   return false;
  // }

  // if ((currentRowCol.col + coord.col < borderLimit.minCol) || (currentRowCol.col + coord.col > borderLimit.maxCol)) {
  //   return false;
  // }
  return true;
}


// function checkCoordBounds(newRow, newCol) {
//   if ((newRow < boundary.minRow) || (newRow > boundary.maxRow)) {
//     console.log('row failed checkbounds');
//     return false;
//   }

//   if ((newCol < boundary.minCol) || (newCol > boundary.maxCol)) {
//     console.log('col failed checkbounds');
//     return false;
//   }
//   return true;
// }

// function checkNoDuplicate(newRow, newCol) {
//   let duplicate = true;
//   // console.log("newRow, newCol",newRow, newCol);
//   // answer.forEach((ele) => {
//   //   console.log("ele.row, ele.col",ele.row, ele.col);
//   //   if ((ele.row === newRow) && (ele.col === newCol)) {
//   //     console.log('duplicate fail');
//   //     duplicate = false; }
//   // });
//   return duplicate;
// }

// function spiralOrder(matrix) {

//   let temp = currentDirection.getDirection();
//   let checkBounds;
//   let checkDuplicate;

//   // console.log("ANSWER B4 FOR-LOOP", answer, "\n");
//   for (let i = 1; i < 3; i++) {
//     console.log("\n", i,"----");
//     console.log("currentCoordinate", currentCoordinate);

//     temp = currentDirection.getDirection();


//     switch (temp) {
//       case 'EAST':
//         checkBounds     = checkCoordBounds(currentCoordinate.row, currentCoordinate.col + 1);
//         checkDuplicate  = checkNoDuplicate(currentCoordinate.row, currentCoordinate.col + 1);
//         if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
//           console.log('EAST - PUSH!!')
//         } else {
//           currentDirection.turnRight();
//           console.log('Turn Right :(');
//         }
//         break;
//       case 'SOUTH':
//         checkBounds     = checkCoordBounds(currentCoordinate.row + 1, currentCoordinate.col);
//         checkDuplicate  = checkNoDuplicate(currentCoordinate.row + 1, currentCoordinate.col);
//         if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
//           console.log('SOUTH - PUSH!!')
//         } else {
//           currentDirection.turnRight();
//           console.log('Turn Right :(');
//         }
//         break;
//       case 'WEST':
//         checkBounds     = checkCoordBounds(currentCoordinate.row, currentCoordinate.col - 1);
//         checkDuplicate  = checkNoDuplicate(currentCoordinate.row, currentCoordinate.col - 1);
//         if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
//           console.log('WEST - PUSH!!')
//         } else {
//           currentDirection.turnRight();
//           console.log('Turn Right :(');
//         }
//         break;
//       case 'NORTH':
//         checkBounds     = checkCoordBounds(currentCoordinate.row - 1, currentCoordinate.col);
//         checkDuplicate  = checkNoDuplicate(currentCoordinate.row - 1, currentCoordinate.col);
//         if (tryPush(checkBounds, checkDuplicate, currentCoordinate.row, currentCoordinate.col + 1)) {
//           console.log('NORTH - PUSH!!')
//         } else {
//           currentDirection.turnRight();
//           console.log('Turn Right :(');
//         }
//         break;
//     }

//   }
// }

// function tryPush(checkBounds, checkDuplicate, row, col) {
//   if (checkBounds && checkDuplicate) {
//     let temp = new CoordinateObject(matrix[row][col], row % matrix.length, col % matrix[0].length);
//     answer.push(temp);
//     console.log('temp', temp);
//     console.log('answer --> ', answer);
//     return true
//   }
//   // let temp2 = answer[answer.length-1];
//   // currentCoordinate.value = temp2.value;
//   // currentCoordinate.row = temp2.row;
//   // currentCoordinate.col = temp2.col;

//   // console.log("temp2",temp2);
//   // console.log('answer --> ', answer);
//   return false;
// }



// class CoordinateObject {
//   constructor(value, row, col) {
//     this.value = value;
//     this.row = row;
//     this.col = col;
//   }
// }

// class BoundaryObject {
//   constructor(matrix) {
//     this.minRow = 0;
//     this.minCol = 0;
//     this.maxCol = matrix[0].length;
//     this.maxRow = matrix.length;
//   }
// }

// class DirectionsObject {
//   constructor() {
//     this.moving = ["EAST", "SOUTH", "WEST", "NORTH"]
//     this.movingIndex = 0;
//   }
//   getDirection() { return this.moving[this.movingIndex]; }
//   turnRight() { this.movingIndex = (this.movingIndex + 1) % this.moving.length; }
// }

// var answer = [];
// var boundary = new BoundaryObject(matrix);
// var currentDirection = new DirectionsObject();
// var currentCoordinate = new CoordinateObject(matrix[0][0], 0, 0);
// answer.push(currentCoordinate);
