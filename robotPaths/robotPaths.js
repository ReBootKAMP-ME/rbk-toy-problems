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
 /*
  Input = size of board
  output = number of unique paths
  Rules:
  1- cannot visit the same spot twice per path
  2- can only move up (vertical position - 1), down (v + 1), left (h - 1), right (h + 1)
  3- path is top left to buttom right

  Functions to benefit from:
  1- togglePiece; which will mimic the robot movement
  2- a path is the toggled pieces on the way
  3- hasBeenVisited; to make sure a spot was not visited;
  
  - From the start, this seems as a depth first search, where each path is determined before moving to the next one
  - So, for position 0,0 the robot has two choices, move right or down, each one is a branch of a decision tree
            ________ 0,0 _________
            |                     |
    ________0,1______     _______1,0_________
  0,2               1,1   1,1               2,0
            
 edges of board, when position is < 0 or > boardSize
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
	var myBoard = makeBoard(n);
	var numberOfPaths = 0;
	var solution = function (i, j) {
		if (i === n - 1 && j === n - 1) {
			numberOfPaths++;
			return;
		} else {
			myBoard.togglePiece(i, j);
			if (i !== n - 1 && !myBoard.hasBeenVisited(i + 1, j)) {
				solution (i + 1, j);
			}
			if (i !== 0 && !myBoard.hasBeenVisited(i - 1, j)) {
				solution (i - 1, j);
			}
			if (j !== n - 1 && !myBoard.hasBeenVisited(i, j + 1)) {
				solution (i, j + 1);
			}
			if (j !== 0 && !myBoard.hasBeenVisited(i, j - 1)) {
				solution (i, j - 1);
			}
			myBoard.togglePiece(i, j);
			return;
		}
	};
	solution(0,0)
	return numberOfPaths;
};

