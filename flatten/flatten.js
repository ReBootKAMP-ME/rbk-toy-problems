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

function flatten(){
	var result =[];
	for (var i = 0; i < arguments.length; i++) {
		result.push(arguments[i])
	}
	for (var i = 0; i < result.length; i++) {
		if(Array.isArray(result[i])){
			result.push(result)
		}
	}
	return result
}

function flatten(){
	var argArray =[];
	for (var i = 0; i < arguments.length; i++) {
		argArray.push(arguments[i])
	}
	var result = argArray.toString().split(',');
	for (var i = 0; i < result.length; i++) {
		if(result[i]=== "null"){
			result[i]=null;
		}
		if(!isNaN(result[i])&& result[i]!=="null"){
			result[i]=parseInt(result[i])						
		}
	}	
	return result;
}