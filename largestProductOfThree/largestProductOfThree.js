/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	array = array.sort();
	var threeNum = array.splice(array.length-3,3)
	var result = 1;
	for (var i = 0; i < threeNum.length; i++) {
		result = result * threeNum[i]
	}
	return result;
};