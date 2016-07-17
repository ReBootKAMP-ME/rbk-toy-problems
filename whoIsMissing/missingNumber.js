// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5
// TIME COMPLEXITY IS O(N);
// test exaample : [2,3,4,5,6,8,9,10,11]
var orderedArrayMissingNumber = function(orderedInputArray) {
	// var array = orderedInputArray;
	// for(var i = array[0] ; i < array[array.length-1] ; i++){
	// 	if(array.indexOf(i) === -1){
	// 		return i;
	// 	}
	// }
	// return 'All ordered Numbers';
////////////////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////////////////////////////	
	// UNCOMMENT THE UPPER PART TO WORK FOR O(N) //
////////////////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////////////////////////////
	// lets try to do it with O(1) again;
	// we will split the array into two . 
	// then we will go to the index in the middle and check
	// so our last element is 6 . and our length is 4
	// then we should assume that there is a number missing 
	// to get the minimum number maybe we should add the 6 with 2 and divide them by 2
	// that will give us a 4 . then we would check if it is there . if it is then we will check
	// the one after and the one before 
	// by that we checked the whole array 
	// and this would be solved only for this example
	var array = orderedInputArray;
	var length = array.length;
	var mid  = (array[array.length-1] + array[0]) / 2;
	console.log(mid);
	if( array.indexOf(mid+1) === -1){
		return mid+1;
	} else if(array.indexOf(mid-1) === -1){
		return mid-1
	}
	return 'All ordered Numbers';
};


// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?

// TIME COMPLEXITY IS O(N)^2
var unorderedArrayMissingNumber = function(unorderedInputArray) {
	// Your code here..
	// used the bubble Sort method .. acttually just copied it from there.
	// then call the other function //
	var array = sortThem(unorderedInputArray);
	console.log(array);
	return orderedArrayMissingNumber(unorderedInputArray);
}

// [2,5,6,2,1,9,2]




var sortThem = function(array){
		counter = 0;
		for(var i = 0 ; i < array.length ; i++){
			if(array[i] > array[i+1]){
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				counter++;
			}
		}
		if(counter === 0){

			return array;
		}
		return sortThem(array)
	}



	// if we want to solve it in O(1). then it should be done without a for loop
	// so lets think of it 
	// if we take the first element and the last element
	// and we add them together
	// then we hmmm
	// linear could be solved so fast :S
	// what if we splice the first element and the last element . or add them together???
	// what are we supposed to do ?????!!!
	//    [1,2,3,5,6,8,9,10]
	//   if we cut the array in half .
	// [1,2,3,5] [6,8,9,10]
	//  // i do not want to do it with linear time complexity but just not to keeep my work empty ill do it
