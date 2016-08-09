/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 [[true,false,false,false,false],
 [false,false,false,false,false],
 [false,false,false,false,false],
 [false,false,false,false,false],
 [false,false,false,false,false]]
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
  board.goLeft = function (i,j) {
    if(j===0){
      this.togglePiece(i,n-1)
    }
    else{
      this.togglePiece(i,j-1) 
    }
  }
  board.goRight = function(i, j) {
    if(j===n-1){
      this.togglePiece(i,0)
    }
    else{
      this.togglePiece(i,j+1)
    }
  }
  board.goUp = function(i, j) {
    if(i===0){
      this.togglePiece(n-1, j);
    }
    else{
      this.togglePiece(i-1,j)
    }
  }
  board.goDown = function(i, j) {
    if(i===n-1){
      this.togglePiece(0, j)
    }
    else{
      this.togglePiece(i+1,j)
    }
  }
  board.robotPaths = function() {
    this.togglePiece(0,0)
    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < x[i].length; j++) {
        if()
      }
    }
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths


var robotPaths = function() {
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].length; j++) {
      x[i][j]
    }
  }
}

