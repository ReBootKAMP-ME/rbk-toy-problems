// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	var length = orderedInputArray[orderedInputArray.length - 1] - orderedInputArray[0]
	for(var i = 0; i < length; i++){
		if(orderedInputArray[i]-orderedInputArray[0] !== i){
			return i + orderedInputArray[0]
		}
	}
}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	var min = unorderedInputArray[0];
	var max = unorderedInputArray[0];
	for(var i = 0; i < unorderedInputArray.length; i++){
		if(unorderedInputArray[i] > max){
			max = unorderedInputArray[i]
		}
		if(unorderedInputArray[i] < min){
			min = unorderedInputArray[i]
		}
	}
	var length = max - min

	for(var j = min; j < max; j++){
		if(unorderedInputArray.indexOf(j) === -1){
			return j
		}
	}

}
