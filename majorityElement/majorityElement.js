/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var arrayResult = arr.sort();
	var array = [];
	var exist = Math.floor(arr.length/3);
	for (var i=0;i<arrayResult.length;i++){
		if(arrayResult[i]===arrayResult[i+exist]){
			array.push(arrayResult[i]);
		}
	}
	return array;
};