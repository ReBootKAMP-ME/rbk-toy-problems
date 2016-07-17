// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5



// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var orderedArrayMissingNumber = function(orderedInputArray) {
	for (var i = 1; i < orderedInputArray.length; i++) {
		if(orderedInputArray[i]!==orderedInputArray[i-1]+1){
			return (orderedInputArray[i-1]+1);
		}
	}
}// O(n)
var add =function(a,b){
    return a+b;
};
var sum =function(start , end){
	if (start > end) {
		return sum(end,start);
	}
	if( end === start) {
		return end ;
	}
	return end + sum(start,end-1);
}
var orderedArrayMissingNumber = function(orderedInputArray) {
	var sumofArray = orderedInputArray.reduce(add, 0);
	var s=sum(orderedInputArray[0],orderedInputArray[orderedInputArray.length-1]);
	if(orderedInputArray.length!== orderedInputArray[orderedInputArray.length-1]-orderedInputArray[0]+1){
		return s-sumofArray ;
	}
}// O(c)
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	var max=Math.max.apply(null, unorderedInputArray);
	var min=Math.min.apply(null, unorderedInputArray);
	var sumofArray = unorderedInputArray.reduce(add, 0);
	var s=sum(min, max);
	console.log(sum)
	if (unorderedInputArray.length!== max-min+1 ) {
		return s-sumofArray;
	}
}
