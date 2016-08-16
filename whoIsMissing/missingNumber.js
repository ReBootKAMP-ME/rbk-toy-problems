// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5

var orderedArrayMissingNumber = function(orderedInputArray) {
	// Your code here..
var counter=orderedInputArray[0]	;
for(var i=0;i<orderedInputArray.length;i++){
	 if (counter!==orderedInputArray[i]){
	 	return counter;
	 }
	 counter++;
}
}

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
var Min =function (array){
	var min=array[0];
    for (var i=0;i<array.length;i++){
    	if (array[i]<min){
    		min=array[i];
    	}
    }
    return min;
}
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	// Your code here..
	var counter=Min(unorderedInputArray);//o(n)
	for (var i=0;i<unorderedInputArray.length;i++){//o(n)
		if (unorderedInputArray.indexOf(counter)===-1){//o(n) for indexOf
			return counter;
		}
		counter++;
	}
}

//time complexity : o(n+n*n)=o(n+n^2)=o(n^2) quadratic time	


