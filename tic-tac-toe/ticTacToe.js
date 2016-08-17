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

//Option 1 (If you are good with Regular Expressions):
function ticTacToe(board){
  board = board.join('-').replace(/,/g,'');//Convert the board to a string
  //Check for row, column, and diagonal patterns
  if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2; 
  if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if(/0/.test(board)) return -1;
  return 0;
};

//Option 2 (For the rest of us):
function ticTacToe(board){
  function checkHor() {
    var res;
    board.forEach(function(row){
      if (row[0] === row[1] && row[0] === row[2] && row[0] !== 0){
        res = row[0];
      }
    });
    return res;
  }
  
  function checkVer() {
    for(var i = 0; i < 3; i++){
      if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0){
        return board[0][i];
      }
    }
  }
  
  function checkDiag(){
    if((board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
       (board[0][2] === board[1][1] && board[1][1] === board[2][0])){
      return board[1][1];
    }
      
  }
  
  //If all above functions did not return a result, it's either draw or the board is not solved yet
  //If you find at least one 0, the board is not solved, otherwise, it's a draw
  function gameOver() {
    for (var x = 0; x < 3; x++){
      for (var y = 0; y < 3; y++){
        if  (board[x][y] === 0){
          return -1;
        }
      }
    }
    return 0;
  }
  
  //The first function that returns a non-falsy value, will be the result.
  //The order is important - gameOver() must be the last function.
  return checkHor() || checkVer() || checkDiag() || gameOver();
}