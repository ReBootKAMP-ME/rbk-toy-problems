// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	// Your code here..
	// Complexity O(n)
	// for(var i=0; i<orderedInputArray.length; i++){
	// 	if(orderedInputArray[i+1]!== orderedInputArray[i]+1){
	// 		return orderedInputArray[i]+1;
	// 	}
	// };

	//Complexity O(1);
	if(orderedInputArray.length === 0){
		return ;
	}
	if(orderedInputArray.length === 3){
		if(orderedInputArray[1] + 1 === orderedInputArray[2])
			return orderedArrayMissingNumber(orderedInputArray.slice(0,2));
		return orderedArrayMissingNumber(orderedInputArray.slice(1));
	}
	if(orderedInputArray.length === 2){
		if(orderedInputArray[0] + 1 === orderedInputArray[1])
			return orderedInputArray[0] - 1;
		return orderedInputArray[0] + 1;
	}
	var midIndex = Math.floor(orderedInputArray.length/2) - 1;
	var midValue = orderedInputArray[midIndex];
	var valueSupposedToBe = Math.floor((orderedInputArray[0] + orderedInputArray[orderedInputArray.length-1])/2);
	return midValue < valueSupposedToBe ? orderedArrayMissingNumber(orderedInputArray.slice(midIndex+1)) : orderedArrayMissingNumber(orderedInputArray.slice(0,midIndex+1));
};

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
// The Complexity if O(n^2)

var unorderedArrayMissingNumber = function(unorderedInputArray) {
	// Your code here..
	do{
		var swapped = false;
		for(var i=0; i<unorderedInputArray.length-1; i++){
			if(unorderedInputArray[i] > unorderedInputArray[i+1]){
				swapped = true;
				[unorderedInputArray[i],unorderedInputArray[i+1]] = [unorderedInputArray[i+1],unorderedInputArray[i]];
			}
		};
	} while(swapped)
	return orderedArrayMissingNumber(unorderedInputArray);
};

