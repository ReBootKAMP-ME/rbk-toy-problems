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
	var onedimensional=[];
	for (var i = 0; i < matrix.length-1; i++) {
		 console.log(matrix[i])
		for (var y = 0; y < matrix[i].length-i; y++) {
			onedimensional.push (matrix[i][y])
		}
		
		console.log(matrix)
        for (var x = i+1; x < matrix.length-i; x++) {
        	onedimensional.push(matrix[x][matrix.length-1])

        }
        
        for (var j = matrix[matrix.length-1].length-1 -(i+1); j >=i ; j--) {
        	onedimensional.push(matrix[matrix.length-1][j])
        }

		}
	return onedimensional;

};

