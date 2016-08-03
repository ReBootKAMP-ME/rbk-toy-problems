// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	// Your code here..
	var last= orderedInputArray.length-1;
	for (var i = orderedInputArray[0]; i <= orderedInputArray[last]; i++) {
		if(orderedInputArray.indexOf(i)=== -1){
			return i;
		}
	}
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getminOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution? n^4
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	// Your code here..
	var max=getMaxOfArray(unorderedInputArray);
	var min=getminOfArray(unorderedInputArray);
	for (var i =min; i <=max; i++) {
		if(unorderedInputArray.indexOf(i)=== -1){
			return i;
		}
	}
}
