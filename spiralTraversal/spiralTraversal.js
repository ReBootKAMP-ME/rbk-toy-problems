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
function sorter(a,b) {
	if(a> b) return -1;
	if(a< b) return 1;   
	return 0; 
}	
/*var spiralTraversal = function(matrix){
	var result=[];
	var lastrow=matrix[matrix.length-1].sort(sorter);
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if(i===matrix.length-1){
				result.push(lastrow[j]);
			}
			if(i>0 && i<matrix[i].length-1){
				result.push()
			}
			result.push(matrix[i][j])
		}
	}
	return result;
};*/

var spiralTraversal = function(matrix){
	var result=[];
	var lastrow=matrix[matrix.length-1].sort(sorter);
	for (var i = 0; i < matrix[0].length; i++) {
		result.push(matrix[0][i]);
	}
	for (var i = 1; i < matrix.length-1; i++) {
		result.push(matrix[i][matrix[i].length-1]);
	}
	for (var i = 0; i < lastrow.length; i++) {
		console.log(lastrow[i])
		result.push(lastrow[i]);
	}
	for (var i = matrix.length-2; i > 1; i--) {
		if(result[result.length-1]===lastrow[lastrow.length-1]){
			result.push(matrix[i][0]);
		}
	}
	for (var i = 1; i < matrix.length; i++) {
		matrix[i]
	}
	console.log(lastrow)
	return result;
};

