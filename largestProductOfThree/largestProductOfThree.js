/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var first = Math.max.apply(null,array);
	array.splice(array.indexOf(first),1);
	var second = Math.max.apply(null,array);
	array.splice(array.indexOf(second),1);
	var third = Math.max.apply(null, array);
	return first*second*third;
};