/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var repeat = {};
	for (var i = 0; i < arr.length; i++) {
		if(repeat[arr[i]] === undefined){
			repeat[arr[i]]=1;
		}else{
			repeat[arr[i]]= repeat[arr[i]]+1;
		}
	}
	for(var key in repeat){
		if(repeat[key] > arr.length/3){
			return key;
		}
	}
}