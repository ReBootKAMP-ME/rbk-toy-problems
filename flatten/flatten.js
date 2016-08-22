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

function flatten(arg){
  // If there is only one argument, don't covert it to an array of one argument,
  // just use the argument as is. For example, if the arg is [2,3] leave it as [2,3] instead of
  // converting it to [[2,3]]. This is important for the recursive call below.
  var args = arguments.length > 1 ? Array.prototype.slice.call(arguments) : arg;
  var output = [];

  //Go over each element in the args
  args.forEach(function(element) {
    //If element is an array, run flatten on this element and concatenate the result to the output array
    if(Array.isArray(element)){
      output = output.concat(flatten(element));
    } else {
      //Otherwise, add element to output
      output.push(element);
    }
  });
  return output;
}