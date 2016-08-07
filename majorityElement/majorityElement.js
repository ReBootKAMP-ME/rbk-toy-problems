/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var n = arr.length;
	var result = [];
	var index = 0;
	var index2 = 0;
	var counter = 1;
	var func = function () {
		if(arr[index]=== arr[index2]){
			counter++;
		}
		if(counter-1 > Math.floor(n/3)){
			result.push(arr[index]);
			index++;
			counter=1;
			func();
		}
		if(index2!== arr.length-1){
			index2++;
			func()
		}
		if(index!==arr.length-1){
			index++;
			counter = 1;
			func();
		}

	}
	return result;
}