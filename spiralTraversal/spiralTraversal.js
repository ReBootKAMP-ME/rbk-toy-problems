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

    		[0][0],[0][1],[0][arr.length-1]  , [1][arr.length-1],[arr.length-1][arr.length-1] , 
 */

	var spiralTraversal = function(matrix){
		var newArray=[];

		function TraversalHelper(matrixArr) {
			if(matrixArr.length === 0)
				return newArray;
			for (var i = 0; i < matrixArr.length; i++) {
				newArray.push(matrixArr[0][i]);
			}
			newArray.pop();
			for (var i = 0; i < matrixArr.length; i++) {
				newArray.push(matrixArr[i][matrixArr[0].length-1]);
			}
			newArray.pop();
			for (var i = matrixArr.length -1 ; i >=0 ; i--) {
				newArray.push(matrixArr[matrixArr.length-1][i]);
			}
			newArray.pop();		
			for (var i = matrixArr.length - 1; i >= 0; i--) {
				newArray.push(matrixArr[i][0]);
			}
			newArray.pop();		

			/////////////////
			
			matrixArr.splice(0,1);
			debugger;
			for (var i = 0; i < matrixArr.length; i++) {
				matrixArr[i].splice(matrixArr.length,1);
			}
			matrixArr.splice(matrixArr[0].length-1,1);

			for (var i = matrixArr.length -1 ; i >=0 ; i--) {
				matrixArr[i].splice(0,1);
			}

			TraversalHelper(matrixArr)
		}

		TraversalHelper(matrix);


		console.log(newArray);
		console.log(matrix);
	};

