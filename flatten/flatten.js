/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

	function flatten() {
		for (var i = 0; i < arguments.length; i++) {
		var arr=[];
		arr.push(arguments[i])
		console.log(arr)
	}
  		var temp = [];
  	function recursiveFlatten(arr) { 
  	  for(var i = 0; i < arr.length; i++) {
   		   if(Array.isArray(arr[i])) {
     	   recursiveFlatten(arr[i]);
     	 } else {
      		  temp.push(arr[i]);
     	 }
   	 }
  }
  recursiveFlatten(arr);
  return temp;
}


// 	var resArr=[];
// 	for (var i = 0; i < arguments.length; i++) {
// 		if(arguments[i].isArray){
// 			if(arguments[i].length>1){
// 				for (var j = 0; j < arguments[i].length; j++) {
// 					var x=arguments[i][j].toString()
// 					var n=number(x)
// 					resArr.push(n)
// 					flatten(arguments[i])
// 				}
// 			}else{
// 				var x=arguments[i][j].toString()
// 				var n=number(x)
// 				resArr.push(n)
// 				flatten(arguments[i])
// 			}
// 		}
// 	}
// 	return resArr

// }