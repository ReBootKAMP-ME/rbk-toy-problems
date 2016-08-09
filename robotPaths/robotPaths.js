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

var copyBoard = function(board){
	var newBoard = makeBoard(board.length);
	for(var i=0; i<newBoard.length; i++){
		for(var j=0; j<newBoard[i].length; j++){
			newBoard[i][j] = board[i][j];
		}
	}
	return newBoard;
};

var robotPaths = function(board) {
	var pathsCounter = 0;

	var getPaths = function(board, rowIndex, colIndex){

		board.togglePiece(rowIndex,colIndex);
		if(board[board.length-1][board.length-1]===true){
			pathsCounter++;
		} else {
			// go up
			var newBoard = copyBoard(board);
			if( rowIndex>0 && newBoard[rowIndex-1][colIndex]!==undefined && !newBoard.hasBeenVisited(rowIndex-1,colIndex)){
				getPaths(newBoard, rowIndex-1, colIndex);
			}
			// go down
			var newBoard = copyBoard(board);
			if( rowIndex<newBoard.length-1 && newBoard[rowIndex+1][colIndex]!==undefined && !newBoard.hasBeenVisited(rowIndex+1,colIndex)){
				getPaths(newBoard, rowIndex+1, colIndex);
			}
			// go left
			var newBoard = copyBoard(board);
			if( colIndex>0 && newBoard[rowIndex][colIndex-1]!==undefined && !newBoard.hasBeenVisited(rowIndex,colIndex-1)){
				getPaths(newBoard, rowIndex, colIndex-1);
			}
			// go right
			var newBoard = copyBoard(board);
			if( colIndex<newBoard.length-1 && newBoard[rowIndex][colIndex+1]!==undefined && !newBoard.hasBeenVisited(rowIndex,colIndex+1)){
				getPaths(newBoard, rowIndex, colIndex+1);
			}
		}
	}

	getPaths(board, 0, 0);

	return pathsCounter;
};

