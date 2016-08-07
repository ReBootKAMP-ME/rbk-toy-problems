/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr) {
	var n = arr.length / 3;
	var l = arr.length
	var obj_rep = {};
	var outArr = [];
	for ( var i = 0; i < l; i++ ) {
		if (obj_rep[arr[i]] && obj_rep[arr[i]] !== 'done') {
			obj_rep [arr[i]]++;
			if (obj_rep [arr[i]] > n){
				outArr.push(arr[i]);
				obj_rep[arr[i]] = 'done';
			}
		} else if (!obj_rep[arr[i]]) {
			obj_rep[arr[i]] = 1;
		}
	}
	return outArr;
};