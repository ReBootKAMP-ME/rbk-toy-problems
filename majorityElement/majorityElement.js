/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
var numbers={};
var results=[];
var n=Math.floor(arr.length / 3);

for (var i = 0; i < arr.length; i++) {
	if(!!numbers[arr[i]]){
		numbers[arr[i]].push(arr[i]);
	}else{
		numbers[arr[i]]=[];
		numbers[arr[i]].push(arr[i]);
	}
}
for(var key in numbers){
	if(numbers[key].length > n)
		results.push(numbers[key][0])
	}
return results;
}