/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	// var arr=array;
	// max1 =Max(array).max;
	// max2 =Max(array.splice(Max(array).index,1));
	// max3 =Max(array.splice(Max(array).index,1));
	// return max1*max2*max3;

	var arr=array.sort();
	var length=array.length-1;
	return arr[length]*arr[length-1]*arr[length-2];
};

// function Max(arr) {
// 	var result={};
// 	result.max=arr[0];
// 	for (var i = 1; i < arr.length; i++) {
// 		if(arr[i]>result.max){
// 			result.max=arr[i];
// 			result.index=i;
// 		}
// 	}
// 	return result;
// }