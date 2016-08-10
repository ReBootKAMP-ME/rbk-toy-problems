/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
<<<<<<< HEAD
 *  
=======
 *
>>>>>>> 2212925fc5c2e83d26f5e5ee71aef5c5fc37d5cf
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

<<<<<<< HEAD
// just like nQueens except that you can be on the same row more than once
// or much much more difficult than that

var robotPaths = function() {
  var myBoard = makeBoard(5);
  var visits = 0;
  var getPaths = function(i, j){
    if(myBoard.hasBeenVisited(myBoard.length-1, myBoard.length-1)){
      visits++;
      return;
    }
    for(var row = i; row < myBoard.length; row++){
      for(var column = j; column < myBoard.length; column++){
        if(!myBoard.hasBeenVisited(row,column)){
          myBoard.togglePiece(row, column);
          getPaths(i, j);
        }
        myBoard.togglePiece(row,column);
      }
    }
  }
  getPaths(0, 0);
  return visits;
};













=======
var robotPaths = function(/*you can pass any parameters you need*/) {

}
>>>>>>> 2212925fc5c2e83d26f5e5ee71aef5c5fc37d5cf

