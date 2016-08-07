/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var obj={};
	var n = arr.length;
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]]=0
	}
	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]]=obj[arr[i]]+1;
	}
	for( number in obj ){
		if(obj[number]>n/3)
			result.push(parseInt(number));
	}
	return result;
}