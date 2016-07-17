// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(array) {
	var missed = [];
	for(var i=0 ; i<array.length-1 ; i++){
		if(!array[i] !== array[i+1]-1)
			missed.push(array[i+1]-1);
	}
	return missed;
}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution? O(n)

function maxArray(a) {
  var max=a[0];
  for(var i=0,j=a.length;i<j;i++){
  	if(a[i]>max)
  		max=a[i];
  }
  return max;
}

var unorderedArrayMissingNumber = function(unOrderArr) {
	var missed = [];
	var max = maxArray(unOrderArr);
	for(var i=0 ; i<unOrderArr.length ; i++){
		if(unOrderArr[i] !== max){
			console.log(unOrderArr[i])
		for(var x=1 ; x<unOrderArr.length-1 ; x++){
			if(unOrderArr[i] !== unOrderArr[x]+1)
				missed.push(unOrderArr[i]+1);
		}
	}
	}
	return missed;

}
