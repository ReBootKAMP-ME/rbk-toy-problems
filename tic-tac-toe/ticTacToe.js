<<<<<<< HEAD
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
	//raw solution
	for (var i = 0; i < board.length; i++) {
	var x = 0;
	var o= 0;
		for (var j = 0; j < board[i].length; j++) {
			if (board[i][j] === 1){
				x++;
			}
			if (board[i][j] === 2) {
				o++;
			}
			if (x === 3 ) {
				return 1;
			}
			if(o === 3){
				return 2;
			}
		}
	}
	//col solution
	for (var l = 0; l < board.length; l++) {
	x = 0, o =0;
		for (var k = 0; k < board[l].length; k++) {
			if (board[k][l] === 1){
				x++;
			}
			if (board[k][l] === 2) {
				o++;
			}
			if (x === 3 || o ===3) {
				return 1;
			}
		}
	}
	
	//left digonal
	if(board[0][0]  === 1 && board[1][1] === 1 && board[2][2] === 1){
		return 1;
	}
	if(board[0][0]  === 2 && board[1][1] === 2 && board[2][2] === 2){
		return 2;
	}

	//right digonal
	if(board[2][0]  === 1 && board[1][1] === 1 && board[0][2] === 1){
		return 1;
	}
	if(board[2][0]  === 2 && board[1][1] === 2 && board[0][2] === 2){
		return 2;
	}

	
	return -1;

};
||||||| merged common ancestors
=======
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

};
>>>>>>> cc35986589ad14cfcabe4a02d384ef9f22bf6e3c
