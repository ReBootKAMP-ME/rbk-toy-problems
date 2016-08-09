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

var robotPaths = function(/*you can pass any parameters you need*/) {
  /// first  iteration even reach spot (4,4)
  //   second iteration throw rows , check new path for every cell (column in evry row)
  // when  reaching to (4,4)  i get path , then i try another
/********************************/
///// first loop
var board=makeBoard(5);
var i=0;
var j=0;
var solution=0;
while (i!=4 && j!=4){
  for (var row=0;row<board.length;row++){
    for (var column=1;column<board.length;column++){
    board.togglePiece(row,j);
    if (!board.hasBeenVisited(row,j+1)){
        /// recrecursion with some updates to function 
    }
      
    }
  solution++
  }
i++;
j++;
}
return solution;
}

