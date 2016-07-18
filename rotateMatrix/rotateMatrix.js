/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, 
 is simply an array of arrays of values.
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
 /*
	Problem analysis:
	I/O:
	input: NxN matrix
	output: NxN matrix

	functionality:
	Rotate 90 degrees clockwise.

	Analysis:
	the first thing I notice is that the last array in the matrix becomes the first element of every array verically
	and the first array becomes the last element on each array, the second array becomes the the third, and third becomes second
	for N is odd, the middle element stays middle but vertically.

	So first, we take the horizental index of the array and subtract it from the last array index

	so for N=4 every item on array 0 will take index (3-0=3) and so on
	this way will also work for odd, if N=3, array 1 elements, will take (2-1=1) position vertically.	
	
	1- create empty array of arrays to store the data
	2- take the last array in original matrix
	3- for every array in matrix from last
	4-for every item in array, push item in array number (item index) of mapped matrix

	Extra Credit:
	For rectangular I would start with something like this:

	var storage = matrix[0].map(function(e){
			return matrix.map(function(e){
				return 0;
			});
	})
	Which will rotate the rectangle, what is remaining is to assign the values from the matrix to the new rectangle.
 */

var rotateMatrix = function(matrix){
	var storage = matrix.map(function(e){
		return e.map(function(e){
			return 0;
		})
	})
	var lmat = matrix.length
	var li = matrix.length-1;
	for (j=li; j>=0; j--){
		for (i=0; i<lmat; i++){
			storage[i][li-j] = matrix[j][i]
		};
	};
	return storage
};