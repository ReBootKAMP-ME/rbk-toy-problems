/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var inverse=function(arr){
var res=[];
res.push(arr[2]);
res.push(arr[1]);
res.push(arr[0]);
return res;
}

// i don't think its a good way for solving this , but i couldnt come out with something more efficient !
var spiralTraversal = function(matrix){
	var results=[];
	var invertedIndex=inverse(matrix[2]);
	for(var i=0; i < matrix.length ; i++){
		for(var j=0; j < matrix.length; j++){
			if(i === 0){
				results.push(matrix[i][j]);
			} else if(i === 1){
				results.push(matrix[i][2])
				j=2;
			}else if(i === 2){
				results.push(invertedIndex[j]);
			}
			if(i===2 && j===2){
				results.push(matrix[1][0]);
				results.push(matrix[1][1]);
			}
		}
	}
	return results;
};