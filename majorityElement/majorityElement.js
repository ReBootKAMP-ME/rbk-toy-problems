/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var n = arr.length;
	var pass = n/3;
	var elements = {}
	var result = new Set()

	for(var i = 0; i < n; i++){

		if(!elements[arr[i]]){
			elements[arr[i]] = 1
		} else {
			elements[arr[i]] += 1
		}

		if(elements[arr[i]] > pass){
			result.add(arr[i])
		}
	}

	return result
}