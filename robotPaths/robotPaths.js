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


// creatt the board
// create a recusion function to test the path if already visited by calling hasBeenVisited function
// if it is not visited move the robot to the location by calling the togglePiece function
// if the robot i and j location reach the final point n test the path if it is hasBeenVisited if not togglePiece to the i ans j.

var robotPaths = function(n) {
  var result = 0;

  var myBoard = makeBoard(n);

  var search = function (i, j) {
    console.log(i, j)
    if (i === n && j === n){
      result+=1;
      return;
    } else if (board.hasBeenVisited(i, j)) {
      return;
    } else {
      board.togglePiece(i, j);
      search(i, j + 1);
      search(i+1, j);
  return paths;
}
}
}