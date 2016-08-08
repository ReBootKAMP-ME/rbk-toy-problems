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
	// our stopping condition will only be if our array reaches the length of the number given
	var array = [];
	var temp = numOfRows - 1;
	while(array.length !== numOfRows){
		// get something to build the rows for us 
		// like a helper function that whenever we pass a counter they send a ready row for us
		array.unshift(buildRow(temp));
		temp--;
	}
	return array;
}

var buildRow = function(number){
	var array = [];
	if(number > 0){
		array.push(1);
	}
	for(var i = 0; i < number; i++){
		if(array.length !== number){
			array.push(number);
		}
	}
	array.push(1);
	return array;
};





