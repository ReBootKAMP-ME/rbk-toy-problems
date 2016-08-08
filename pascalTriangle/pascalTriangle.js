/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1


or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

// create array with [[1],[1,1]]
// each time we push array start with 1 and end with one in the middle 
var buildTriangle = function(numOfRows){
	var result = new Array(numOfRows);
	result[0]=[1]
	result[1]=[1,1]
	for (var i = 2; i < result.length; i++) {
		result[i]=new Array(i+1)
		result[i][0]=1
		result[i][result[i].length-1]=1;
		for (var j = 1; j < result[i].length-1; j++) {
			result[i][j] =  
		}
	}
return result;
}