/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);


    spiralTraversal([
      [1,   2,  3,  4],
      [5,   6,  7,  8],
      [9,  10, 11, 12],
      [13, 14, 15, 16]
    ]);




    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

//result index  0  1  2  3  4  5  6  7  8
//matrix index 00 01 02 12 22 21 20 10 11
// values       1  2  3  6  9  8  7  4  5   
// take the elements in the first array as they are
// take the last elements of the middle arrays
// take the elements in the last arrat in reverse
// take the first elements of the middle arrays
// recursion for the matrix withour the outer circle
// take the middle of the matrix


var spiralTraversal = function(matrix){
	var result = [];
	for (var i = 0; i < matrix.length; i++) {
		if (i===0) {
			for (var j = 0; j<matrix[i].length; j++){
				result.push(matrix[i][j])	
			}
		} else if (i<matrix.length){
				for (var h = 0; h < matrix[i].length-1; i++) {
					result.push(matrix[i][matrix[i].length])
				} 
			}else if (matrix[i] === matrix.length){
				for (var k = matrix[i].length; k>=0; k--) {
					result.push(matrix[i][k])
				}
			}
	} 
	return result
};

