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
  board.goLeft = function (i ,j){
  	return this[i][j-1]
  }
  board.goRight = function (i ,j){
  	return this[i][j+1]
  }
  board.goUp = function (i, j){
  	return this[i-1][j];
  }
  board.goDown = function (i, j){
  	return this[i+1][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var robotPaths = function(board,i,j) {
	// it should check if the piece is true then try to go left or right or down or up
	// unfortunatliy i was unable to figure out a way to do so
	var counter=0;
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {
			if(!board[i][j]){
				board.togglePiece(i,j)
				counter++;
			}else{
				return robotPaths(board, i, j)
			}
		}
	}
	return counter;
}

