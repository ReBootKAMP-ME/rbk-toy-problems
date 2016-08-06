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
	var spiral = []
	var count = 0

	while(spiral.length < (matrix.length * matrix[0].length)){
		for(var i = count; i < matrix[0].length - count; i++){
			spiral.push(matrix[count][i])
		}
		for(var i = count + 1; i < matrix[0].length - count; i++){
			spiral.push(matrix[i][matrix[0].length - count - 1])
		}
		for(var i = matrix[0].length - count - 2; i > count; i--){
			console.log(i, matrix[0].length - count - 1, matrix[i][matrix[0].length - count - 1])
			spiral.push(matrix[matrix[0].length - count - 1][i])
		}
		for(var i = matrix[0].length - count - 1; i > count; i--){
			console.log(i, matrix[0].length - count - 1, matrix[i][matrix[0].length - count - 1])
			spiral.push(matrix[i][matrix[0].length - count - 1])
		}
		count++
	}

	return spiral
};

