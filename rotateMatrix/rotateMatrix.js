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
  var matrix = [
   [1,2,3,4],
   [5,6,7,8],
   [9,'A','B','C'],
   ['D','E','F','G']
  ];

  var matrix = [
   [4,8,C,G],
   [3,7,B,C],
   [9,'A','B','C'],
   ['D','E','F','G']
  ];  
 
  matrix[0][0]; // 1
  matrix[3][2]; // 'F'
 
  var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
  // rotatedMatrix is:
  [ ['D',9,5,1],
   ['E','A',6,2],
   ['F','B',7,3],
   ['G','C',8,4]
  ]

	I,J
	0,0 ==> 0,3
	0,1 ==> 1,3
	0,2 ==> 2,3
	0,3 ==> 3,3

	1,0 ==> 0,2
	1,1 ==> 1,2
	1,2 ==> 2,2
	1,3 ==> 3,2

	2,0 ==> 0,1
	2,1 ==> 1,1
	2,2 ==> 2,1
	2,3 ==> 3,1

	3,0 ==> 0,0
	3,1 ==> 1,0
	3,2 ==> 2,0
	3,3 ==> 3,0
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

// var rotateMatrix = function(matrix){
// 	var resultMatrix=[];
// 	var arr=[];
// 	var n=matrix.length-1;
// 	for (var i = 0; i < matrix.length; i++) {
// 		resultMatrix.push(arr);
// 	}
// 	for (var i = 0; i < matrix.length; i++) {
// 		for (var j = 0; j < matrix.length; j++) {
// 			arr.push(matrix[n][i])
// 		}
// 		resultMatrix.push(arr);
// 		arr=[];
// 		n--;
// 	}
// 	return resultMatrix;

// };

var rotateMatrix = function(matrix){
	var resultMatrix=[];
	var arr=[];
	var n=matrix.length-1;
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix.length; j++) {
			arr.push(matrix[n-j][i]);
		}
		resultMatrix.push(arr);
		arr=[];
	}
	return resultMatrix;

};


// var rotateMatrix = function(matrix,par){
// 	var resultMatrix=[];
// 	var arr=[];
// 	var n=matrix.length-1;
// 	for (var i = 0; i < matrix.length; i++) {
// 		for (var j = 0; j < matrix.length; j++) {
// 			arr.push(matrix[i][n-j]);
// 		}
// 		resultMatrix.push(arr);
// 		arr=[];
// 	}
// 	return resultMatrix;

// };