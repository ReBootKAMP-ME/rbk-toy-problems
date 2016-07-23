// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(array) {
	// Your code here..
	var missingnumber = [];
	for (var i = 0; i < array.length-1; i++) {
		if(array[i]+1 !== array[i+1]){
			missingnumber.push(array[i]+1)
		}
	}
	return missingnumber;
}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	var order = unorderedInputArray.sort()
	var missingnumber = [];
	for (var i = 0; i < order.length-1; i++) {
		if(order[i]+1 !== order[i+1]){
			missingnumber.push(order[i]+1)
		}
	}
	return missingnumber;
}
