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
	var spiralArrO = [];
	var min_i = 0;
	var min_j = 0;
	var max_i = matrix.length-1;
	var max_j = max_i;
	var coordinates = {
		x: 0,
		y: 0
	};
	while(spiralArrO.length < (matrix.length*2)) {
		console.log(coordinates.x, coordinates.y)
		if ( coordinates.x === min_i && coordinates.y === min_j ){ // if current position.x, and current position.y are at minimum, increment i
			for (var i = coordinates.x; i <= max_i; i++ ) {
				spiralArrO.push ( matrix[coordinates.y][i] );
			}
			coordinates.x = max_i;
			min_j+=1;
		} else if ( coordinates.x === max_i && coordinates.y === min_j ) { // if x is at max, and y is at min, increment y
			for ( var j = coordinates.y; j <= max_j; j++ ) {
				spiralArrO.push ( matrix[j][coordinates.x] );
			}
			coordinates.y = max_j;
			max_i-=1;
		} else if ( coordinates.x === max_i && coordinates.y === max_j ) { // if both at max, decrement x
			for ( var i = coordinates.x; i >= min_i; i-- ) {
				spiralArrO.push ( matrix[coordinates.y][i] );
			}
			coordinates.x = min_i;
			max_j-=1;			
		} else {	// if x at min, and y at max, decrement y
			for ( var j = coordinates.y; j >= min_j; j-- ) {
				spiralArrO.push ( matrix[j][coordinates.x] );
			}
			coordinates.y = min_j;
			min_i+=1;				
		}

	}
return spiralArrO;
};

