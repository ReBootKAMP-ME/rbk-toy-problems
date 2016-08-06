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
	var result = [];
	for (var i = 0; i < matrix.length; i++) {
		for (var k = 0; k < matrix[i].length; k++) {
			result.push(matrix[i][k]);
			if(result.length === matrix[i].length){
				var index = matrix[i].length -1;
				for (var l = 1; l < matrix.length; l++) {
					result.push(matrix[l][index]);
				}
				var last = matrix.length -1;
				for (var j = matrix.length - 2; j >= 0; j--) {
					result.push(matrix[last][j])
				}
			}
		}
	}
	return result;
};

