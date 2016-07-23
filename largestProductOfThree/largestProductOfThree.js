/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var arr =[];
	var array2 =array;
	for (var i = 0; i < 3; i++) {
		var max = Math.max.apply(Math,array2)
		arr.push(max)
		var maxIndex = array2.indexOf(max)
		array2.splice(maxIndex,1)
	}
	var result =1;
	for (var i = 0; i < 3; i++) {
		result=result*arr[i]
	}
	return result
	
};