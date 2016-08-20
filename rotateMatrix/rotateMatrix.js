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
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
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
var rotateMatrix = function(matrix){
	var newmatri=[];
	var matrixl=matrix.length;
	//console.log(matrix)
	var newarr=[];
	for (var y = 0; y<= matrixl-1; y++) {
		
	var newarr=[];
	for (var i = matrixl-1; i >=0; i--) {
		newarr.push(matrix[i][y])
	}
	newmatri.push(newarr)
	}
return  newmatri;
};

var rotateMatrix1=function(matrix,d){
	if(d===1){
	rotateMatrix(matrix);	
	}else{
		var newmatri=[];
	var matrixl=matrix.length;
	//console.log(matrix)
	var newarr=[];
	for (var y = 0; y<= matrixl-1; y++) {
		
	var newarr=[];
	for (var i = 0; i >= matrixl-1; i++) {
		newarr.push(matrix[i][y])
	}
	newmatri.push(newarr)
	}
   return  newmatri;

	}
}

/*var rotateMatrix = function(matrix){
	var newmatri=[];
	var matrixl=matrix.length;
	console.log(matrix)
	for (var i = 0; i < matrixl-1; i++) {
		console.log(matrix[i])
		 var newarr=[];
      for (var y = 0; y < matrix[i].length-1; y++) {
      	
		for (var j= matrixl-1+i; j >0; j--) {
			newarr[j]=matrix[i][y]
	    }

	}
	newmatri.push(newarr);
	}
return  newmatri;
};*/