/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){

	arr.sort(function(a, b){return b-a})
	var arrappear=[];
	var Eappear;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i]===arr[i+1]){
			Eappear=Eappear+1;
		}else{
			if(Eappear >arr.length /3){
			arrappear.push(arr[i-1]);
		}
		Eappear=1;
		}
	}
	return arrappear;
}