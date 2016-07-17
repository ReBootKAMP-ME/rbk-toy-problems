// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	for (var i = 0; i < orderedInputArray.length; i++) {
		if(orderedInputArray[i+1]!==orderedInputArray[i]+1){
			return orderedInputArray[i]+1
		}
	}
}
//to solve it in constant time 
var orderedInputArray2 = function(arr){
	
}
// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(array) {
	for (var i = 0; i < array.length; i++) {
		if(array[i]!== Math.max.apply(Math,array))
		if(array.indexOf(array[i]+1)===-1){
			return array[i]+1
		}
	}
}
// time complexity = O(n^2)
