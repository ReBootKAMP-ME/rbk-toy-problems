/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

function sort(arrayX){
	for (i = 0; i <= arrayX.length-1; i++){
    	if (arrayX[i] > arrayX[i+1]){
        	temp = arrayX[i+1];
        	arrayX[i+1] = arrayX[i];
        	arrayX[i] = temp;
        	i = i-2;
      	}
  	}
  	return arrayX
}

var largestProductOfThree = function(array) {
	var products=sort(array)
	console.log(products)
	return products[products.length-1] * products[products.length-2] * products[products.length-3]
};