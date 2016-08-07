/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/
function sorter(a,b) {
	if(a< b) return -1;
	if(a> b) return 1;   
	return 0; 
}
var findAll = function(arr){
	var appearance =Math.floor(arr.length/3)
	var result=arr;
	var n=1;
	for (var i = 0; i < arr.length; i++) {
		
	}
	
	return result;
}
/*var findAll = function(arr){
	var appearance =Math.floor(arr.length/3)
	var result=[];
	var sorted=arr.sort(sorter);
	var n=1;
	for (var i = 0; i < sorted.length; i++) {
		if(sorted[i]===sorted[i+1]){
			n++;
			console.log(appearance);
		}
		if(n>appearance){
			result.push(sorted[i])
			n=1;
		}
		if(sorted[i]!==sorted[i+1]){
			n=1;
		}
	}
	return result;
}*/