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

var generatePath=function(){
  var cells=[];
  for (var i = 0; i < 5; i++) {
    var ran=Math.floor(Math.random()*5);
    if(cells.indexOf(ran) === -1)
      cells.push(ran);
    else
      i--;
  }
  return cells
}
var robotPaths = function(/*you can pass any parameters you need*/) {
var board=makeBoard(5);
var paths=[];

//for each cell there is lots of paths
//generate a random path to go throw it
for (var i = 0; i < board.length; i++) {
  var innerArray=[];
  for (var j = 0; j < board.length; j++) {
    var path=geeratePath();
    if(board[i][path[j]].hasBeenVisited())

  }
}

}

