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
  var counter = 0;
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board[0][0] = true; 
  var target = board[4][4];
  var allPaths = [];

  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }

  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  board.direction = function (i, j) {
    var path = [];
    //moving down
    if(this[i+1][j]!== undefined && !this.hasBeenVisited([i+1][j])){
      this[i][j]=this[i+1][j];
      path.push(this[i][j])
      if(this[i][j] === target){
        counter++;
      }else{
        board.direction(i, j);
      }
       //moving left
    if(this[i][j+1]!== undefined && !this.hasBeenVisited([i][j+1])){
      this[i][j]=this[i][j+1];
      path.push(this[i][j])
      if(this[i][j] === target){
        counter++;
      }else{
        board.direction(i, j);
      }
    }
      //moving up;
    }if(this[i-1][j]!== undefined && !this.hasBeenVisited([i-1][j])){
      this[i][j]=this[i-1][j];
      path.push(this[i][j])
      board.direction(i, j);

    }
    //moving right
    if(this[i][j-1]!== undefined && !this.hasBeenVisited([i][j-1])){
      this[i][j]=this[i][j-1];
      path.push(this[i][j])
      board.direction(i, j);
    }
    if(this.allPaths.indexOf(path)===-1){
      allPaths.push(path);
    }
  }
  board.path(){
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if(board[i][j]===true)
          board.togglePiece(i,j)
      }
    }
   board.direction(0,0);
  }
  return counter;
  //return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths



var robotPaths = function() {

}

