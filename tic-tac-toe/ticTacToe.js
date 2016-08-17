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
		var right = 0;
		var left=0;
	for (var i = 0; i < board.length; i++) {
		var horizintal = 0;
		var vertical = 0;
		for (var j = 0; j < board[i].length; j++) {
			if (board[i][j] === 0) {
				horizintal += board[i][j]+5;
			}else{
				horizintal += board[i][j];
			}
			if (board[j][i] === 0) {
				vertical += board[j][i]+5;
			}else{
				vertical += board[j][i];
			}
		}
		right = board[0][0] + board[1][1] + board[2][2];
		left = board[0][2] + board[1][1] + board[2][0];

		if (horizintal === 3 || vertical === 3 || right === 3 || left === 3) {
			return 1;
		}else if(horizintal === 6 || vertical === 6 || right === 6 || left === 6){
			return 2;
		}else if(horizintal >= 10 || vertical >= 10){
			return -1;
		}
	}
	return 0;
};