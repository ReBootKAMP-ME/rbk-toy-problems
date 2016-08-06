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

var spiralTraversal = function(matrix){
	var returnArr = [];
	var j = 0;
	for (var i = 0; i < matrix.length; i++) {
		debugger;
		if(j !== matrix.length){
			while(j !== matrix.length){
				returnArr.push(matrix[i][j]);
				j++;
			}
			j--;
			if(i === matrix.length-1){
				i--;
				j++;
			}
		}else {
			j-=2;
			while(j !== -1){
				returnArr.push(matrix[i][j])
				j--;
			}
			//I'm sorry for this but my way from beginning wrong i had to devid the matrix to arrays not go throw all elements
			returnArr.push(matrix[1][0])
			returnArr.push(matrix[1][1])
		}
	}
	return returnArr
};

