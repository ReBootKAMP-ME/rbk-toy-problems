/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var product;

	var myRecursiveFun = function(accum,numOfIterations,remainingValues){
		if(numOfIterations===3){
			if(!product){
				product = accum;
			} else if(accum > product){
				product = accum;
			}
			return ;
		}
		for(var i=0; i<remainingValues.length; i++){
			var tempArray = remainingValues.slice();
			var tempValue = tempArray.splice(i,1);
			myRecursiveFun(accum*tempValue,numOfIterations+1,tempArray);
		}
	}

	myRecursiveFun(1,0,array);
	
	return product;
};