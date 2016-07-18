// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5
var orderedArrayMissingNumber = function(orderedInputArray) {
	var missing;
	var array = orderedInputArray
	var l = array.length
	var first = array[0]
	for (var i=0; i<l; i++){
		if (array[i] > (i+first)){
			missing = i + first;
			break;
		}
	}	
	return missing;	
}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var order = function (unOrderedArray) {
	var sol;
	var solution = function (array){
		var switched = false;
		var temp;
		for (var i=0; i<array.length-1; i++){
			if (array[i]>array[i+1]){
				temp = array[i+1];
				array[i+1] = array [i];
				array[i] = temp;
				switched = true
			}
		}
		if (!switched) {
			sol = array
		} else {
			solution (array);
		}
	}
	solution (unOrderedArray);
	return sol;
}
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	var ordered = order(unorderedInputArray);
	var missing = orderedArrayMissingNumber(ordered);
	return missing;
}
