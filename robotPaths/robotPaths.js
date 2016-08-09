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

  /*
  SOLUTION:
  Let's create a method on the board that will help us determine if the move in a given direction is valid;
  */
  board.validMove = function(i,j,direction){
    switch(direction){
      //Check if we can move right:
      case "R":
        return j+1<n && !this.hasBeenVisited(i,j+1);
      //Check if we can move left:  
      case "L":
        return j>0 && !this.hasBeenVisited(i,j-1);
      //Check if we can move down:  
      case "D":
        return i+1<n && !this.hasBeenVisited(i+1,j);
      //Check if we can move up:  
      case "U":
        return i>0 && !this.hasBeenVisited(i-1,j);
      default:
        return false;
    }
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths

/*
SOLUTION:
Generally problems involving finding all paths or all combinations / permutations of something involve recursion. Note that in basically all cases the process is clearly determined - the algorithm does not use random number generator in any way. Do not try to use Math.random function in these type of problems.

The idea for this problem is similar to how we solved n-queens. We will mark a cell as visited, then we calculate all possible paths from this cell going right, left, down, and up, then we mark this cell back as unvisited.

See an artistic drawing of how the solution works for a 3x3 board in this folder.
*/

var robotPaths = function(n,board,i,j) {
  //Since this solution involves recursion, we need a base case - we check if we reached bottom right corner. If we did, we found a unique path so return 1.
  if(i === n-1 && j === n-1){
    return 1;
  }
  //Otherwise, let's calculate how many paths we can take in total from this cell considering that we can't step into cells that we have already visited.
  var total = 0;
  //Mark current cell as visited
  board.togglePiece(i,j);
  //Check if we can step right first, then calculate how many paths we can take from the cell on the right. Here we call robotPaths with j incremented by 1. Note that this function will call itself hundreds of times recursively marking and then unmarking the visited cells. When all paths from the next cell are calculated, the board will be restored back to the original condition, because robotPaths function toggles the piece back at the end and returns total paths found.
  if(board.validMove(i,j,"R")){
    total += robotPaths(n,board,i,j+1);
  }
  //Step left
  if(board.validMove(i,j,"L")){
    total += robotPaths(n,board,i,j-1);
  } 
  //Step down
  if(board.validMove(i,j,"D")){
    total += robotPaths(n,board,i+1,j);
  } 
  //Step up
  if(board.validMove(i,j,"U")){
    total += robotPaths(n,board,i-1,j);
  }
  //Now, we checked all the paths from this cell, let's restore it back to unvisited
  board.togglePiece(i,j);

  //And return total number of paths found
  return total;
}

var myBoard = makeBoard(5);
console.log(robotPaths(5,myBoard,0,0));
