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

The task for this exercise is to write a function that given the number of rows, 
builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
  var restOfArr=[];
  var triangleArr = [[1]];
//debugger;
  for (var i = 0; i < numOfRows-1; i++) {
    restOfArr = [1];
    for (var j = 1; j < triangleArr[i].length; j++) {
    	// console.log(triangleArr[i][j])
    	// console.log(triangleArr[i][j-1])
      restOfArr[j] = triangleArr[i][j] + triangleArr[i][j-1];
          	// console.log(restOfArr[j])

    }
    restOfArr.push(1);
    // console.log(restOfArr)
    triangleArr.push(restOfArr);
  }
  // console.log(triangleArr)
  return triangleArr;
}


/* 
i   j    rest
------------------
0	1	 t[0][1]+t[0][0]-->




rest=[1]
train=[[1]]
*/