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
	//assuming the 2 dimentional array is a square
	var len = matrix.length

	while(spiral.length < (len * len)){
		var dis = len - count

		for(var i = count; i < dis; i++){
			spiral.push(matrix[count][i])
		}
		for(var i = count + 1; i < dis; i++){
			spiral.push(matrix[i][dis - 1])
		}
		for(var i = dis - 2; i > count; i--){
			spiral.push(matrix[dis - 1][i])
		}
		for(var i = dis - 1; i > count; i--){
			spiral.push(matrix[i][count])
		}
		count++
	}

	return spiral
};

