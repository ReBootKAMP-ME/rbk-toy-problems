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

 [
 	[1,2,3,4,5,6,7],
 	[8,9,10,11,12,13,14]
 ]

var rotateMatrix = function(matrix , setDirection){
	var newMatrix = [];
	if(setDirection === 1){
		for(var column = 0 ; column < matrix[1].length ; column++){
			var innerArray = [];
			for (var row = matrix.length-1 ; row >= 0 ; row--){
				innerArray.push(matrix[row][column]);

			}
			newMatrix.push(innerArray);
		}
	} else {
		for(var column = matrix.length-1 ; column >= 0 ; column--){
			var innerArray = [];
			for (var row = 0 ; row < matrix.length  ; row++){
				innerArray.push(matrix[row][column]);

			}
			newMatrix.push(innerArray);
		}
	}
	return newMatrix;
};

//what if everytime we took one column ... so we take a column .. start from the last and go back each time one step 
// when the array is over ... we switch to the next column
// so first we'r gonna start with column 0.

// wee have to rotate them all , we need to start from the last array and take the first element .
// and go back one array .. so we'll start from the end . 
// we start from the end . and everytime we go back one element . 
// inside that element we will go bac
// time complexity is bad in this .. it can work recursively 
// should try that if i finish the extra credit]
// now its working for rectangularss
// lets try making it work clockwise and anti clockwise
// i think all the extra credits now are working but that is DRY , so now we need to make our code cleaner.
// ran out of time .. TOO DRY!!














