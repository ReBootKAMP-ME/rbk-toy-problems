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

var sumpascal=function(array){
	if(array.length === 2){
		return [2];
	}else{
		var res=[];
		for (var i = 0; i < array.length-1; i++) {
			var j=i;
			res.push(array[i]+array[j+1]);
		}
	}
	return res;
}
var buildTriangle = function(numOfRows){
	var results=[];
	for (var i = 0; i < numOfRows; i++) {
		var innerArray=[];
		innerArray.push(1)
		var j=i;
		if(results.length >= 1){
			if(results[j-1].length === 1){
				innerArray.push(1);
			}else{
				var res=sumpascal(results[j-1]);
				for(var k=0; k < res.length; k++){
					innerArray.push(res[k]);
				}
				innerArray.push(1);
			}
		}
			results.push(innerArray);
	}
return results;
}