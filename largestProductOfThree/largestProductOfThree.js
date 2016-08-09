/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var sortNumber = function (a,b){
	   return a - b;
	}

	var descending = array.slice().sort(sortNumber).reverse();

	if((descending[descending.length - 1] && descending[descending.length - 2]) < 0){

		descending[descending.length - 1] = Math.abs(descending[descending.length - 1])
		descending[descending.length - 2] = Math.abs(descending[descending.length - 2])
		
		descending = descending.sort(sortNumber).reverse();
	}

	return descending[0] * descending[1] * descending[2]
};