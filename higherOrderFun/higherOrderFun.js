/*
Problem 1:

Replace the native Array map function with your own. 
It should work exactly the same way as Javascript built-in map function.

The map function works on the array and returns back a new array 
where each element has been modified according to the results
of calling the callback function.

See example usage to understand what arguments are passed to the callback.
*/

Array.prototype.map = function(callback){
  //use native .forEach method to iterate over array
  var output = [];
  // .forEach accepts a function and passes element, index, and array
  // to it for every step of the loop.
  // You can read documentation on forEach here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  this.forEach(function(element,index,array){
    //Run the callback function and pass in the current element, index, and array to it.
    var newElement = callback(element,index,array);
    //Push the result of running the callback to the output array
    output.push(newElement);
  });
  return output;
};

/*
Example usage:
var transform = function(element,index,array){
  return array[index] + index + element;
};

["a","b","c"].map(transform); //should return ['a0a','b1b','c2c'];
*/


/*
Problem 2:

Write an asynchronous sum function that accepts two numbers and a callback.
The function should wait 1 second, then calculate the sum of two numbers
and pass the result to the callback.

If 1st or 2nd argument is not a number, the function should call the callback
with the error message - a simple string that says "Incorrect argument(s)". 

Please see example usage to understand what should be passed to the callback.
*/

/*
SOLUTION:
There is a pattern of how callbacks are used in asynchronous function. When the callback
is called, it should know somehow if there was an error or the result calculated correctly.
This is achieved by passing two arguments to the callback function - the error and the result.
The error argument is null when there was no error, and the result is passed as second 
argument like this - callback(null, result);
If there was an error, it will be populated and the result will be null - callback(error, null);
You MUST know this pattern - it is used everywhere in asynchronous world.
*/

var asyncSum = function(a,b,callback){
  //Note that we can't pass any arguments to the function inside setTimeout. Why is that?
  setTimeout(function(/*No arguments here*/){
    //Check if a or b is not a number
    if(typeof a !== "number" || typeof b !== "number"){
      //If not, call the callback with first parameter set to the error message and second
      //parameter (the result) set to null
      callback('Incorrect argument(s)',null);
    } else {
      //If both arguments are numbers, set the error parameter to null, and set the result
      //parameter to a+b
      callback(null,a+b);
    }
  },1000);
};

/*
Example use:

var logNumber = function(error, number){
  if(error){
    console.log('Error: ', error);
  } else {
    console.log('The total is: ', number)
  }
};

asyncSum(10,7,logNumber);//should print "The total is: 17" after 1 second
asyncSum(10,"B",logNumber);//should print "Error: Incorrect argument(s)" after 1 second
*/


/*
Problem 3 (ADVANCED):

What kind of candy do you like?
Your answer: 
SOLUTION: You guys are terrible at picking candy

*/
