// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	var currentNumber = orderedInputArray[0];
	for (var i = 0; i < orderedInputArray.length-1; i++) {
		if(orderedInputArray.indexOf(++currentNumber) === -1){
			return currentNumber;
		}
	}
	
}
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution? O(n)
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	var currentNumber = unorderedInputArray.min();
	for (var i = 0; i < unorderedInputArray.length-1; i++) {
		if(unorderedInputArray.indexOf(++currentNumber) === -1){
			return currentNumber;
		}
	}
}
