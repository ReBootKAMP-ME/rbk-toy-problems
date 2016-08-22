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
  var args = Array.prototype.slice.call(arguments);
  var array = [];
  	for(var  i = 0; i < args.length; i++){
  		if(Array.isArray(args[i])){
  			args[i] = args[i].join(',');
  			args[i] = args[i].split(',');
  			for(var j = 0 ; j < args[i].length;j++){
  				if(typeof args[i][j] === 'number'){
  					array.push(JSON.parse(args[i][j]));
  				} else {
  					array.push(args[i][j])
  				}
  			}
  		} else {
  			if(typeof args[i] === 'number'){
  				array.push(JSON.parse(args[i]));
  			} else {
  				array.push(args[i])
  			}
  		}
  	}
  	// This is to parse all string numbers
  	for(var i = 0; i < array.length; i++){
  		if(typeof array[i] === 'string'){
  			if(array[i].charCodeAt(0) > 47 && array[i].charCodeAt(0) < 58){
  				array[i] = JSON.parse(array[i]);
  			}
  		}
  	}

  return array;
}