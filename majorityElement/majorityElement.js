/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var coll={};
	var res=[];
	for (var i = 0; i < arr.length; i++) {
		 if(coll[arr[i]] === undefined) {
		 	coll[arr[i]] = 0;
		 }
		 coll[arr[i]]++;
	}

	for(var k in coll){
		if (coll[k] % 3 === 0 ){
			res.push(parseInt(k))
		}
	}
	console.log(coll)
	return res;
}