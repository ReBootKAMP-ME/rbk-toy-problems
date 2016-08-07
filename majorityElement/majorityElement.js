/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var occurenace = Math.floor(arr.length/3);
	var counter = 0;
	var possibleElement = arr[0];
	arr.splice(0,1);
	if(arr.indexOf(possibleElement)>0){
		counter++;
		if(counter === occurenace)
			return possibleElement;
		var temp = arr.indexOf(possibleElement);
		arr.splice(temp,1);
	}
	else{
		// recursion;
		return findAll(arr);
	}
}