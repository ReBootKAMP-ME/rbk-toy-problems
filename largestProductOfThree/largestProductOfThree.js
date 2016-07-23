/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

 // to find the product of three numbers 
 // we simply need to find the largest three numbers 
 // and multiply them by each other 
 // that way we can handle it 
 // to find the largest three numbers
 // what if we defined an empty array 
 // and pushed inside the three largest numbers 
 // then multiply it together 
 // I think we should recurse it 
 // to get the largest three first
 // then run through the three and multiply them with each other;
 // i think that also handles negative numbers
 // i dont know i havent made anything
 // but it handles it.
 


var largestProductOfThree = function(array) {
	var newArr = [];
	var largestThree = function(array){
		var largest = array[0];
		for(var i = 0; i<array.length; i++){
			if(array[i] > largest){
				largest = array[i];
			}
		}
		if(newArr.length === 3){
		  return newArr;
		} else {			
			newArr.push(largest);
			array.splice(array.indexOf(largest),1);
			return largestThree(array);
		}
	}

	var largestThree = largestThree(array);
	var product = 1;
	for(var i = 0 ;i < largestThree.length ; i++){
		product*= largestThree[i];
	}
	return product;
};










