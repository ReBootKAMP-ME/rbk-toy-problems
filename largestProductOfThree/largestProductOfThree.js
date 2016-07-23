/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var largest=0;
	var product=0;
	for (var i=0;i<array.length;i++){
		for (var j=i;j<array.length;j++){
			if(array[j+1]!==undefined && array[j+2]!==undefined){
				product=array[i]*array[j+1]*array[j+2];
			}
			if(product>largest){
				largest=product;
			}
		}
	}
	return largest;
};