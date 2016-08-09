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

var robotPaths = function(n) {
	var board = makeBoard(n);
	var pathsCounter = 0;

	var getPaths = function(board, rowIndex, colIndex){
		if(board[board.length-1][board.length-1]===true){
			pathsCounter++;
		} else {
			// go up
			if( rowIndex>0 && !board.hasBeenVisited(rowIndex-1,colIndex)){
				board.togglePiece(rowIndex-1,colIndex);
				getPaths(board, rowIndex-1, colIndex);
				board.togglePiece(rowIndex-1,colIndex);
			}
			// go down
			if( rowIndex<board.length-1 && !board.hasBeenVisited(rowIndex+1,colIndex)){
				board.togglePiece(rowIndex+1,colIndex);
				getPaths(board, rowIndex+1, colIndex);
				board.togglePiece(rowIndex+1,colIndex);
			}
			// go left
			if( colIndex>0 && !board.hasBeenVisited(rowIndex,colIndex-1)){
				board.togglePiece(rowIndex,colIndex-1);
				getPaths(board, rowIndex, colIndex-1);
				board.togglePiece(rowIndex,colIndex-1);
			}
			// go right
			if( colIndex<board.length-1 && !board.hasBeenVisited(rowIndex,colIndex+1)){
				board.togglePiece(rowIndex,colIndex+1);
				getPaths(board, rowIndex, colIndex+1);
				board.togglePiece(rowIndex,colIndex+1);
			}
		}
	}

	board.togglePiece(0,0);
	getPaths(board, 0, 0);

	return pathsCounter;
};

