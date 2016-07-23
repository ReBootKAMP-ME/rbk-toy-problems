/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var arrayOfIndexes = [];
	var flag = true;
	var comp;
	var index;
	while (flag){
		comp = -Infinity;
		for (var i=0; i<array.length; i++){
			if (array[i]>comp && arrayOfIndexes.indexOf(i) === -1){
				index = i;
				comp = array[i];
			}
		}
		arrayOfIndexes.push(index);
		if (arrayOfIndexes.length === 3){
			flag = false
		}
	}
	var product = array [arrayOfIndexes[0]];
	for (var j=1; j<arrayOfIndexes.length; j++){
		product = product * array[arrayOfIndexes[j]]
	};
	return product
};