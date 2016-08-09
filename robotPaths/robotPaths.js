/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

var robotPaths = function(myBoard) {
  var i=0,j=0;
  while(!myBoard[myBoard.length-1][myBoard.length-1]){
   

    //if it is in the top line
    if( i === 0){
      if (j == 0) {// if it in top left
        if(myBoard.togglePiece(i+1,j) !== true && myBoard.togglePiece(i,j+1) !== true){

  
        }else if(myBoard.togglePiece(i+1,j) !== true && myBoard.togglePiece(i,j-1) !== true && myBoard.togglePiece(i,j+1) !== true){

        }        
      }
    }


    //if it is in the lift line
    if( j === 0){
      if(myBoard.togglePiece(i+1,j) !== true &&  myBoard.togglePiece(i,j-1) !== true){

      }
    }

    // if  it is in the bottom line
    if( i = myBoard.length-1){
      if (j === 0){
        
      }
      if(myBoard.togglePiece(i-1,j) !== true &&  myBoard.togglePiece(i,j-1) !== true && myBoard.togglePiece(i,j-1) !== true){

      }
    }


      
  }
}

       //myBoard.togglePiece(i,j+1) !== true &&
       //myBoard.togglePiece(i-1,j) !== true &&










