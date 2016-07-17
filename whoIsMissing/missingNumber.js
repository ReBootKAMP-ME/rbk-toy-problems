// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

// i don't know how to solve it with O(1) without for loop but i try to solve the main problem.
var orderedArrayMissingNumber = function(orderedInputArray) {
	var missing = [];
	for (var i = 0; i<orderedInputArray.length-1; i++){ // O(n)
		if (!((orderedInputArray[i]+1)===orderedInputArray[i+1])){
			missing.push(orderedInputArray[i]+1);
		}
	}
return missing;
}
// time complexity is O(n)

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	var ordered = unorderedInputArray.sort(); // O(n^2)
	return orderedArrayMissingNumber(ordered); // O(n)
}
// time complexity is O(n^3)