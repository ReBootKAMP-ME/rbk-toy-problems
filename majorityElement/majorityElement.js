/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var returnArr = [];
	var size = arr.length / 3
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		if(obj[arr[i]] === undefined){
			obj[arr[i]] = 1;
		}else {
			obj[arr[i]]++; 
		}
	}
	for(key in obj){
		if(obj[key] > size){
			returnArr.push(parseInt(key))
		}
	}
	return returnArr;
}