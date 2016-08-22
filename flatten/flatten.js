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
	var result = [];
	for (var i = 0; i < arguments.length; i++) {
		if(typeof(arguments[i])!=='object'){
			result.push(arguments[i])
		}
		if(arguments[i]===null){
			result.push(arguments[i])
		}
		if (Array.isArray(arguments[i])) {
			// if(typeof(arguments[i])!== 'null') {
			for (var j = 0; j < arguments[i].length; j++) {
				if(typeof(arguments[i][j])!=='object'){
					result.push(arguments[i][j])
				}
				if(arguments[i][j]===null){
					result.push(arguments[i][j])
				}
				if (Array.isArray(arguments[i][j])) {
					for (var z = 0; z < arguments[i][j].length; z++) {
						result.push(arguments[i][j][z])
					}
				}
			}
		}	
			
	}	
	return result;
}