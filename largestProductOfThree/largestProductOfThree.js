/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  var larg = 1;
  var arr = array.sort();
  for (var i = arr.length-1; i > arr.length-4; i--) {
    larg = larg * arr[i];
  }
  return larg;
};

var largestProductOfThreeNegative = function(array) {
  var larg = 1;
  var arr = array.sort();
  for (var i = 0; i < 3; i++) {
    larg = larg * arr[i];
  }
  return larg;
};