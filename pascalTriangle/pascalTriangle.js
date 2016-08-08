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

var buildTriangle = function(numOfRows){
	var result = [];
	var repeat = function (row){
		if(row === numOfRows+1){
			return ;
		}
		var singleRow= [];
		singleRow[0] = 1;
		singleRow[row-1] = 1;
		var previousRow = result[result.length-1];
		for (var i = 1; i < singleRow.length-1; i++) {
			singleRow[i] = previousRow[i-1]+previousRow[i];
		}
		result.push(singleRow);
		repeat(row+1);
	}
	repeat(1);
	return result;
}