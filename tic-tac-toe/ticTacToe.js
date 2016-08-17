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
	var flag = false
	var equalSum = function(a, b, c){
		if((a === b) && (b === c) && ((a && b && c) > 0)){
			return a
		} else if ((a && b && c) > 0){
			return 0
		} else {
			return -1
		}
	}

	// rows
	for(var i = 0; i < 3; i++){
		var s = equalSum.apply(null, board[i])
		if(s > 0){
			return s
		} else if (s < 0){
			flag = true
		}
	}

	// columns
	for(var i = 0; i < 3; i++){
		var s = equalSum.call(null, board[0][i], board[1][i], board[2][i])
		if(s > 0){
			return s
		} else if (s < 0){
			flag = true
		}
	}

	// crosses
	var crossL = equalSum.call(null, board[0][0], board[1][1], board[2][2])
	var crossR = equalSum.call(null, board[0][2], board[1][1], board[2][0])

	if(crossL > 0){
		return crossL
	} else if (crossL < 0){
		flag = true
	}

	if(crossR > 0){
		return crossR
	} else if (crossR < 0){
		flag = true
	}

	if(flag){
		return -1
	}

	return 0
};