/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var myObj = {};
	for(var i=0; i<arr.length; i++){
		if(!myObj[arr[i]]){
			myObj[arr[i]] = 0;
		}
		myObj[arr[i]]++;
	}
	var results = [];
	for(var key in myObj){
		if(myObj[key] > arr.length/3){
			results.push(parseInt(key));
		}
	}
	return results;
}