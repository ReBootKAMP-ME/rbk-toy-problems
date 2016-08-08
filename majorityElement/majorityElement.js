/*
<<<<<<< HEAD
Given an integer array of size n, find all elements that appear more than n/3 times.
 The algorithm should run in linear time.
=======
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.
>>>>>>> db29f232448d7aa16797aa93e42968cb825dd7b8

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

*/

<<<<<<< HEAD
         
    
	var findAll=function(arr){
		var result=0;
		var count=0;
    for(var i = 0; i<arr.length-1; i++ ) {
		if(count === 0){
			result = arr[ i ];
			count=1;
		}else if(result === arr[i]){
			   count++;
        }else{
           count--;
        }
    }
    return result;

	}
	// var findAll = function(arr){

	// 	var n=1;
	// 	var startArr=0;
	// 	var endArr=arr.length-1;
	// 	if(arr[n]===arr[endArr]){
	// 		startArr++;
	// 		endArr--;
	// 		n++;
	// 	}
	// 	if(n/3!==1){
	// 		return "no"
	// 	}
	// 	return arr[n]

	// }


	// var findAll = function(arr){
	// 	// var result=[];
	// 	// var count=0;
	// 	//array of size n
	// 	var n=1;
	// 	var i=0;
	// 	var j=1;
	// 		if(arr[i]===arr[j]){
	// 			// result.push(arr[i]);
	// 			// count++;
	// 			n++;
	// 			j++;
	// 	}
	// 		i++;
	// 	if(n/3===1){
	// 		return arr[j];
	// 	}
	// }

 
  
=======
var findAll = function(arr){

}
>>>>>>> db29f232448d7aa16797aa93e42968cb825dd7b8
