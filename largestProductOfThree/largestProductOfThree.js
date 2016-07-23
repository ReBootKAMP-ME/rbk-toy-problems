/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

//create array 
//multiply each numper with its folllwing 3 numbers and save in array
//7*1*3*2
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var largestProductOfThree = function(array) {

	//polynomial complexity

	// var results=[];
	// for (var i = 0; i < array.length; i++) {
	// 	var product=1;
	// 	var main=array[i];
	// 	for (var j = 0; j < array.length; j++) {
	// 		if( j !== i){
	// 			product*=array[j]
	// 		}
	// 	}
	// 	results.push(product);
	// }
	// return getMaxOfArray(results);

	//constant complexity
	//works also for negatives
	var results=[];
	results.push(array[1]*array[2]*array[3]);
	results.push(array[0]*array[2]*array[3]);
	results.push(array[0]*array[1]*array[2]);
	return getMaxOfArray(results);
	
};