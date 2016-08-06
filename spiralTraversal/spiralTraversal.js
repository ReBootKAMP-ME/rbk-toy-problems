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
	var newArr = [];

	var recuriveFunc = function(remMatrix){
		if(remMatrix.length === 0){
			return;
		}
		if(remMatrix.length <= 1){
			for(var i=0; i<remMatrix[0].length; i++){
				newArr.push(remMatrix[0][i]);
			}
			return;
		}
		for(var i=0; i<remMatrix[0].length; i++){
			newArr.push(remMatrix[0][i]);
		}
		remMatrix = remMatrix.slice(1);
		for(var i=0; i<remMatrix.length-1; i++){
			newArr.push(remMatrix[i].pop());
		}
		for(var i=(remMatrix[remMatrix.length-1]).length-1; i>=0; i--){
			newArr.push(remMatrix[remMatrix.length-1][i]);
		}
		remMatrix = remMatrix.slice(0,remMatrix.length-1);
		for(var i=remMatrix.length-1; i>=0; i--){
			newArr.push(remMatrix[i].shift());
		}
		recuriveFunc(remMatrix);
	}

	recuriveFunc(matrix);

	return newArr;
};

