// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var OrderedMissingNumber = function(inputArray) {
// This solution is O(log(N)) time complexity
	var recursive = function(firstIndex, lastIndex){
		var length = lastIndex - firstIndex + 1 
		
		var firstHalfIndex = Math.floor((length - 1)/2) + firstIndex
		var secondHalfIndex = Math.ceil((length - 1)/2)
		
		if(inputArray[length-1] - inputArray[secondHalfIndex] + 1 !== length - secondHalfIndex){
			return recursive(secondHalfIndex, lastIndex)
		}

		if(inputArray[firstHalfIndex] - inputArray[firstIndex] !== firstHalfIndex - firstIndex ){
			return recursive(firstIndex, firstHalfIndex)
		}

		return inputArray[firstHalfIndex]+1

	}
	return recursive(0, inputArray.length-1)
	
}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(inputArray) {
// This solution is O(N) time complexity
	var min = inputArray[0];
	var max = inputArray[0];
	var total = 0;

	for(var i = 0; i < inputArray.length; i++){
		if (inputArray[i] < min) { min = inputArray[i]};
		if (inputArray[i] > max) { max = inputArray[i]};
		total += inputArray[i]
	}

	return ((inputArray.length + 1 )*(max+min))/2 - total

}
