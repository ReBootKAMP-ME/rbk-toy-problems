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
/* looking at this issue, it seems like a recursive solution, where the first and last item in any row is always 1, 
and the items in the middle are sums of previous rows, which in turn are sums of previous rows until they reach the second row which is [1,1] */


var buildTriangle = function(numOfRows) {
  var pascalTriangle = []; // define output array of arrays
  var solution = function (rowNumber) {
    if (rowNumber === 1) {
      pascalTriangle[0] = [1];
    } else if (rowNumber === 2) {
      pascalTriangle[1] = [1, 1];
      solution (1);
      return pascalTriangle[1];
    } else {
      pascalTriangle[rowNumber - 1] = [];
      pascalTriangle[rowNumber - 1][0] = 1;
      pascalTriangle[rowNumber - 1][rowNumber - 1] = 1;
      var previousRowArr = solution (rowNumber - 1);
      for (var i = 1; i < rowNumber - 1; i++) {
        pascalTriangle[rowNumber - 1][i] = previousRowArr[i - 1] + previousRowArr[i];
      }
      return pascalTriangle[rowNumber - 1];
    }
  };
  solution (numOfRows);
  return pascalTriangle;
};