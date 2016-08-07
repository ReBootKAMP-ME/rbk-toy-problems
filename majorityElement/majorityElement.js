
/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

sorted = [-16, 12, 12, 12, 17, 4, 4, 7]
*/



var findAll = function(arr){
var sortedArr = arr.sort();
var condition = arr.length/3;
var elements = [];
var counter=0;
var temp = [];

for (var i = 0; i < sortedArr.length; i++){
	if(sortedArr[i] === elements[i]){
      counter++;
	} else {
		elements.push(sortedArr[i])
	}
	if (counter >= condition){
	  elements.push(sortedArr[i])	
	} 
}
return elements;
}



