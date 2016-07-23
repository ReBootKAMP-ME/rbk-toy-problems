/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	function sorter(a,b) {
		if(a> b) return -1;
		if(a< b) return 1;   
		return 0; 
	}
	var sorted=array.sort(sorter);
	console.log(sorted)
	return sorted[0]*sorted[1]*sorted[2]
};

var largestProductOfThree = function(array) {
	var arr=array;
	var largest= Math.max(...arr);
	arr.splice(arr.indexOf(largest),1);
	var secondLargest= Math.max(...arr);
	arr.splice(arr.indexOf(secondLargest),1);
	var thirdLargest=Math.max(...arr);
	return largest*secondLargest*thirdLargest
};//second solution