/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.

If you never played the game, here is a good simulator: http://playtictactoe.org/

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:

[[0,0,1],
 [0,1,2],
 [2,1,0]]

We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.

You may assume that the board passed in is valid.

Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];

ticTacToe(board);//should return -1

var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];

ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
	// check the row
	for (var i = 0; i < board.length; i++) {
		if(board[i][0]===board[i][1] && board[i][1]===board[i][2]){
			return board[i][0];
		}
	}
	// check the coulm
	for (var i = 0; i < board.length; i++) {
		if(board[0][i]===board[1][i] && board[1][i]===board[2][i]){
			return board[0][1];
		}
	}
	// check the left corner
	if(board[0][0]=== board[1][1] && board[1][1]===board[2][2]){
		return board[0][0]
	}
	// check the right corner
	if(board[0][2]=== board[1][1] && board[1][1]===board[2][0]){
		return board[0][0]
	}
	// not solved yet
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if(board[i][j]===0)
				return -1;
		}
	}
	// just draw
	return 0;

};