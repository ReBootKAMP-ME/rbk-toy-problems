/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var max = function(arr){
	var max = arr[0];
	for(var i=1 ; i<arr.length ; i++){
		if(arr[i]>max)
			max=arr[i];
	}
	return max;
};

var largestProductOfThree = function(array) {
	var product = 1;
	var counter = 0;
	for (var i=0; i<array.length ; i++){
    	if(counter === 2){
    		return product;
    	}else{
    		var maxN = max(array);
    		product = product * maxN;
    		var index = array.indexOf(maxN);
			array.splice(index,1);
    		console.log(array);
    		counter++;
    		i--;
    	}
	}
};