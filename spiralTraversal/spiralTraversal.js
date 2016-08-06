/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
  var minRow=0;
  var maxRow = matrix.length-1; 
  var minCol=0; 
  var maxCol = matrix[0].length-1;
  var result = [];

  while(minCol<=maxCol && minRow<=maxRow){
    //Move right
    if(minRow<=maxRow){
      for(var i=minCol;i<=maxCol;i++){
        result.push(matrix[minRow][i]);
      }
      minRow++;
    }
    //Move down
    if(minCol<=maxCol){
      for(var i=minRow;i<=maxRow;i++){
        result.push(matrix[i][maxCol]);
      }
      maxCol--;
    }
    //Move left
    if(minRow<=maxRow){
      for(var i=maxCol;i>=minCol;i--){
        result.push(matrix[maxRow][i]); 
      }
      maxRow--;
    }
    //Move Up
    if(minCol<=maxCol){
      for(var i=maxRow;i>=minRow;i--){
        result.push(matrix[i][minCol]);  
      }
      minCol++;
    }
  }
  return result;
};
