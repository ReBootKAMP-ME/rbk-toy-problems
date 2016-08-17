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
  // test from left to right
  
  var bigResult = -1;
  
  for(var i = 0; i < board.length ; i++){
  	var haveWon = horizontalTic(board[i]);
  	if(haveWon > 0){
  	  bigResult = haveWon;	
  	}
  }
  return bigResult;


  // test major Diagonal 

  var verticalTic = function(column){
  	var temp = column[0]
  	var result;

  	for(var i = 0 ; i < column.length; i++){
  		temp = column[i];
  		for(var j = 0; j < column.length; j++){
  			if(temp)
  		}
  	}


  	if(result){
  		return result;
  	} else {
  		result = row[0];
  		return result;
  	}
  }






  // test minor Diagonal









  // test up to Down


}


// inefficient answer though its wrong


var horizontalTic = function(row){
  	var temp = row[0]
  	var result;
  	for(var i = 1; i < row.length; i++){
  		if(temp !== row[i]){
  			result = -1;
  		}
  	}
  	if(result){
  		return result;
  	} else {
  		result = row[0];
  		return result;
  	}
}






