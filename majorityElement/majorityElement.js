/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

var findAll = function(arr){
	var c=Math.floor(arr.length/3);
	var counter=0;
	var result=[];
    for (var i=0;i<arr.length;i++){
	    counter=0;
    	for (var j=0;j<arr.length;j++){

    		if (arr[i]===arr[j]){
    			counter++
    		}
    	}
    		if (counter	>c){
    			
    			result.push(arr[i]);
    		}
    	
    }
   return result;	

}