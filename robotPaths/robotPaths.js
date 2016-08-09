/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var robotPaths = function(boardSize) {
  boardSize = 5
  var myBoard = makeBoard(boardSize)

  //robot initial start
  myBoard.togglePiece(0,0);

  var moveLeft = function(robot, i, j){
    if(j === 0){
      return 'DEAD END'
    }

    robot.togglePiece(i, j - 1)
    return j - 1
  }

  var moveRight = function(robot, i, j){
    if(j === boardSize - 1){
      return 'DEAD END'
    }

    robot.togglePiece(i, j + 1)
    return j + 1
  }

  var moveUp = function(robot, i, j){
    if(i === 0){
      return 'DEAD END'
    }

    robot.togglePiece(i - 1, j)
    return i - 1
  }

  var moveDown = function(robot, i, j){
    if(i === boardSize - 1){
      return 'DEAD END'
    }

    robot.togglePiece(i + 1, j)
    return i + 1
  }

  var move = function(dir, robot, i, j){
    if(dir === 'LEFT'){
      return moveLeft(robot, i, j)

    } else if(dir === 'RIGHT'){
      return moveRight(robot, i, j)

    } else if(dir === 'UP'){
      return moveUp(robot, i, j)
      
    } else if(dir === 'DOWN'){
      return moveDown(robot, i, j)
      
    }
  }

  var createPath = function(newPath, board, i, j){

    var direct = 'LEFT'

    while(!board.hasBeenVisited(boardSize-1, boardSize-1)){
      
      var temp = move(direct, board, i, j)

      if(temp !== 'DEAD END' && direct === ('LEFT' || 'RIGHT')){
        j = temp;
      } else if (temp !== 'DEAD END' && direct === ('UP' || 'DOWN')){
        i = temp
      } else {
        
      }

    }

    return newPath
  }

  var everyPath = function(paths, numOfPaths, i, j, newPath){
    
    createPath([], myBoard)

    return everyPath(paths, numOfPaths + 1, 0, 0, [])
  }

  return everyPath([], 0, 0, 0, []) 
}

