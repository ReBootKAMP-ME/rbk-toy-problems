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

	var conseqO = 0;
	var conseqX = 0;
	for(var i=0; i<board.length; i++){
		var OnumH = 0, OnumV = 0, XnumH = 0, XnumV = 0;
		for(var j=0; j<board.length; j++){
			switch(board[i][j]){
			case 1:
				XnumH++;
				break;
			case 2:
				OnumH++;
				break;
			}
			switch(board[j][i]){
			case 1:
				XnumV++;
				break;
			case 2:
				OnumV++;
				break;
			}
		}
		if(XnumH === 3 || XnumV === 3){
			return 1;
		}
		if(OnumH === 3 || OnumV === 3){
			return 2;
		}
	}
	for(var i=0; i<board.length-1; i++){
		if(board[i][i] !== board[i+1][i+1]){
			break;
		} else if(i=== board.length-2){
			return board[i][i];
		}
	}
	return -1;
};