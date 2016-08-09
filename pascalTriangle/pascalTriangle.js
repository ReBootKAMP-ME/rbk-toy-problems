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
	function helperBuild(number) {
		if(number === result.length)
			return result;
		if(result.length===0)
			result.push([1]);
		else if(result.length===1)
			result.push([1,1]);
		else{
			debugger;
			var row=[];
			row.push(1);
			for (var i = 0; i < result[result.length-1].length-1; i++) {
				row.push(result[result.length-1][i]+result[result.length-1][i+1]);
			}
			row.push(1);
			result.push(row);
		}
		return helperBuild(numOfRows);
	}
	return helperBuild(numOfRows);

}