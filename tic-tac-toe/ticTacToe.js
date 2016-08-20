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
	var counter0 = 0;
	var counter1 = 0;
	var counter2 = 0;
	//check row by row if there complete row of 1 or 2
	for(var i=0 ; i<board.length ; i++){
		for(var t=0 ; t<board[i].length ; t++){
			if(board[i][t] === 0)
				counter0++;
			if(board[i][t] === 1)
				counter1++;
			if(board[i][t] === 2)
				counter2++;
		}
		if(counter1 === 3)
			return 1;
		if(counter2 === 3)
			return 2;
		//check column
		for(var e=0 ; e<board[i].length ; e++){
			if()
		}
	}
};