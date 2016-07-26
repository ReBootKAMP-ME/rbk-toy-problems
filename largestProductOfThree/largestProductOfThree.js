/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  if(array.length<3){
    return 'Array is too small'
  };
  array.sort(function(a,b){return a-b});
  
  var positiveSum = array[array.length-3]*array[array.length-2]*array[array.length-1];
  
  if(array[0]<0 && array[1]<0){
    var negativeSum = array[0]*array[1]*array[array.length-1];
    return negativeSum > positiveSum ? negativeSum : positiveSum;
  }
  return positiveSum;
};