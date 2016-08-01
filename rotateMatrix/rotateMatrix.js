/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).

 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */ 
    
 //      var matrix = [
 // *  [1,2,3,4],
 // *  [5,6,7,8],
 // *  [9,'A','B','C'],
 // *  ['D','E','F','G']
 // * ];  


      // 3,0==>0,0 
      //3,1==>1,0
      //3,2==>2,0
      //3,3==>3,0

var rotateMatrix = function(matrix){
	var n=matrix.length-1;
	// console.log('length',n)
	var temp=0;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j+i< n; j++) {
			  temp=matrix[i][n-j];
			  //console.log(temp)
			 matrix[i][n-j]=matrix[i+j][i]
			 //console.log(matrix[i][n-j],matrix[i+j][i])

			 matrix[i+j][i]=matrix[n][i+j]

			 matrix[n][i+j]=matrix[n-j][n]
			 matrix[n-j][n]=temp;
	}
	n--;
}
			return matrix

};