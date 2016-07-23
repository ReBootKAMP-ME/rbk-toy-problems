/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var copyArray = array;
	var numbers = [];
	for (var i = 0; i < 3; i++) {
		numbers.push(max(copyArray));
		copyArray.splice(copyArray.indexOf(numbers[i]), 1)
	}
	return numbers[0] * numbers[1] * numbers[2]
};


var max = function (array) {
	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		if(array[i] > max){
			max = array[i];
		}
	}
	return max;
}