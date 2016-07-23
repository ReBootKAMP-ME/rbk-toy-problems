/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var arr=array
	var max=Math.max(...array);
	arr.splice(arr.indexOf(max),1)
	var max2=Math.max(...array)
   arr.splice(arr.indexOf(max2),1)
	var max3=Math.max(...array)
	arr.splice(arr.indexOf(max3),1)
	 return max*max2*max3
};