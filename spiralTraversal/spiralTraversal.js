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
// there must be a way more efficient way than that , must get DRY

var func = [leftToright,upToDown,rightToLeft,downToUp];
var spiralTraversal = function(matrix, counter, result){
	counter = counter || 0;
	result = result || [];
	// edge statement for return
	if(result.length ===  matrix.length * matrix[0].length){
		return result;
	}
	for(var j = 0; j < matrix.length ; j ++){
		counter = j;
		for(var i = 0 + counter ; i < matrix.length[0] - counter; i++){
			func[i](matrix, counter, result);		
		}
	}
}



var spiralTraversalWRONG = function(matrix){

	4 directions : right down left up
	var directions = {
		right : [[0],[matrix.length]],
		down : [[0],[matrix.length]],
		left : [[matrix.length-1],[0]]
		up : [[0],[matrix.length]]
	}

	var runThrough = function(array, directions){
		if(result.length === matrix.length * matrix[0].length){
			result.concat(array);
		}
		for(var i =  )
		runThrough(array)
	}

	runThrough([],directions.right)

	var result = [];
	for(var i = 0 ; i < matrix[0].length; i++){
		result.push(matrix[0][i]);
	}
	for(var i = 0 ; i < matrix[0].length; i++){
		if(result.indexOf(matrix[i][matrix.length-1]) === -1){
			result.push(matrix[i][matrix.length-1]);
		}
	}
	for(var i = matrix.length-1 ; i >= 0; i--){
		if(result.indexOf(matrix[matrix.length-1][i]) === -1){
			result.push(matrix[matrix.length-1][i]);
		}
	}
	// return result;
	var innerSpiral = function(array){
		if(array.length === matrix.length){
			if(result.length === matrix.length * matrix[0].length){
				return result;
			} else {
				array = [];
				innerSpiral(array ,func[++counter])
			}
			
		} else {
			for(var i = 0; i < func.length; i++){
				func[i](matrix)
			}
		}
	}

};


// what if we defined four different functions for each direction that does our job needed

var leftToRight = function(matrix, start, result){
	for(var i = start; i < matrix.length; i++){
		result.push(matrix[start][i]);
	}
	return result;
};

var upToDown = function(array, start, result){
	for(var i = start; i < matrix.length; i++){
		if(result.indexOf(matrix[i][matrix.length-1]) === -1){
			result.push(matrix[i][matrix.length-1]);
		}
	}
	return result;
}

var rightToLeft = function(matrix, start, result){
	for(var i  = start ; i < matrix.length ; i++){
		if(result.indexOf(matrix[1][i]) === -1){
			result.push(matrix[1][i]);
		}
	}
	return result;	
}

var downToUp = function(matrix, start, result){
	for(var i = matrix.length-1 ; i >= start; i--){
		if(result.indexOf(matrix[matrix.length-1][i]) === -1){
			result.push(matrix[matrix.length-1][i]);
		}
	}
	return result;
}