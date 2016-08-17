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

Conditions:
1 Major Diagonal
1 Minor Diagonal
Horizental
Vertical
*/

function ticTacToe(board){
	var solved = function (x, y, z){
		return (((x && y && z) !== undefined) && ((x + y + z) % 3 === 0) && ((x && y && z) !== 0))
	}
	for (var i = 0; i < 3; i++ ) {
		if (solved (board[i][0], board[i][1], board[i][2])){
			return 1;
		} 
		if (solved (board[0][i], board[1][i], board[2][i])){
			return 1
		}
		if ((i === 0) && (solved (board[i][i], board[i+1][i+1], board[i+2][i+2]))) {
			return 1;
		}
		if ((i === 2) && (solved (board[2-i][i], board[i-1][i-1], board[i][2-i]))) {
			return 1;
		}
	}
	return -1;
};