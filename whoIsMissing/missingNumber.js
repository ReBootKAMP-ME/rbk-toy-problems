// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	for (var i = 0; i < orderedInputArray.length-1; i++) {
		if(orderedInputArray[i+1]-orderedInputArray[i]>1)
			return orderedInputArray[i+1]-1;
	}

	// var num1=orderedInputArray.pop();
	// var num2=orderedInputArray[length-1];
	// if(num1-num2>1)
	// 	return num1-1;
	// if(orderedInputArray.length-1===1)
	// 	return  'not found'
	// return orderedArrayMissingNumber(orderedInputArray);

}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	return orderedArrayMissingNumber(unorderedInputArray.sort());
}
// o(2n)=> o(n) : n for sort and n for orderedArrayMissingNumber
