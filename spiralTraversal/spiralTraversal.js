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
	var counter = matrix.length;
	var limit = 0;
	var result = [];
	for (var j=matrix.length-1; j>0; j--) {
	
			for (var i = limit; i < counter; i++) {			
				result.push(matrix[limit][i]);	
			}
			for (var i = limit+1; i < counter; i++) {
				result.push(matrix[i][j])
			}
			for (var i = counter-2; i > limit; i--) {
				result.push(matrix[j][i])
			}
			for (var i = counter-1; i > limit; i--) {
				result.push(matrix[i][limit])
			}
		counter--;
		limit++;
	}
	return result ;

};

