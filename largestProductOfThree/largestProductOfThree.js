/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var arr= array.sort();
	var product = 1
	if(arr[arr.length-1] > 0){
	for (var i = arr.length - 1; i >= arr.length-3; i--) {
			product=product*arr[i];
		}	} else {
			for (var i =0 ; i<3 ; i++) {
				product=product * arr[i] ;
				
			}
		}
		return product
};