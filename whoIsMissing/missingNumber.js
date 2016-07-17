// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5
	//calculate the differnces between two numper
	//check if they are equal
	//check if its not ecual
	//guess the number

var orderedArrayMissingNumber = function(orderedInputArray) {
	// Your code here..
	var results=0;
	for(var i=0; i < orderedInputArray.length-1 ; i++){
		var next=i+1;
		if(orderedInputArray[next]-orderedInputArray[i] !== 1){
			results=orderedInputArray[i]+1;
			return results;
		}
	}
}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	// Your code here..
	var results=0;
	var newArr=unorderedInputArray.sort();
	var results=0;
	results=orderedArrayMissingNumber(newArr);
	return results;
}
