/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
	
	spiralTraversal([
      [1,2,3,7],
      [4,5,6,9],
      [7,8,9,2],
      [2,8,6,9]
    ]);

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */
var check=function (matrixC) {
	for (var i = 0; i < matrixC.length; i++) {
		if( matrixC[i].length === 0){
			matrixC.splice(i,1)
		}
	}
}

var spiralTraversal = function(matrix){
	var result=[];
	


	while(matrix.length !== 1){ 
		//to copy the upper
		for (var i = 0; i < matrix[0].length; i++) {
			result.push(matrix[0][i])
			
		}
		matrix.splice(0,1);


		//to copy the last colum from the right
		for (var j = 0; j < matrix.length; j++) {
			result.push(matrix[j][matrix.length]);
			matrix[j].splice(matrix[j].length-1 , 1);
		}

		//to copy the bottom
		for (var l = matrix[matrix.length - 1].length -1; l >= 0; l--) {
			result.push(matrix[matrix.length-1][l])
			matrix[matrix.length-1].splice(l,1)
		}
	    check(matrix);
		
		//the lift colum
		for (var k = matrix[matrix.length-1].length-1; k > 0; k--) {
			result.push(matrix[k-1][0]);
			matrix[k-1].splice(0,1)
		}
	}
	for (var i = 0; i < matrix[0].length; i++) {
		result.push( matrix[0][i])
	}

	return result;
};



// spiralTraversal([
//       [1,2,3,7],
//       [4,5,6,9],
//       [7,8,9,2],
//       [2,8,6,9]
//     ]);

//     spiralTraversal([
//       [1,2,3],
//       [4,5,6],
//       [7,8,9]
//     ]);




