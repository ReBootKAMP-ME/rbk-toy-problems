// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	//input:ordered array
	//output:missing number in that array
	//start looping over the array from the second element
	//other loop starting from first element
	//check if element is equal previus plus one 
	//if it is not return that element
	var result;
	for (var i = 1; i < orderedInputArray.length; i++) {
		for(var j = 0; j < orderedInputArray.length-1; j++){
 			if(orderedInputArray[i] !== orderedInputArray[j+1]){
 				 var result=orderedInputArray[i]
 			}
		}
	}
	return result;
}
//time complexity is O(n) because of nested loops



// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	var sortedArray=unorderedInputArray.sort(function(a,b){
		return a - b
	})
	var result;
	for (var i = 1; i < sortedArray.length; i++) {
		for(var j = 0; j < sortedArray.length-1; j++){
 			if(sortedArray[i] !== sortedArray[j+1]){
 				result=sortedArray[i]
 			}
		}
	}
	return result;
}
//time complexity is O(n) because of nested loops
