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

// this function check if the elements of array have the same value
var checkRow = function (array){
	 for (var i=1; i<array.length; i++){
	 	if (array[i]!==array[0]){
	 		return false;
	 	}

	 }
	 return  true;
}

function ticTacToe(board){
	// this method check row row in the board 
	// for column i need another function for check column and major dianlog
	for (var i=0; i<board.length;i++){
		for (var j=0;j<board.length;j++){
			if(board[i][j]===1){
				if(checkRow(board[i])){
					return 1;

				}
				else if (board[i][j]===2) {
					if(checkRow(board[i])){
						return 2;
					}

				}

			}
		}
	}
	 

};