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
  var top = 0;
  var down = matrix.length - 1;
  var left = 0;
  var right = matrix[0].length - 1;
  var result = [];
  for(var i=left ; i<=right ; i++){
  	result.push(matrix[top][i]);
  	top++;
  	if(top > down || left > right) 
  		return;
  }
  return result;
}
// The idea is to have four indexes: 
//top, down, left and right which are going to
// be used to point where we are want to start
// console.log rows and columns, when top > 
//down or left > right then do it

