/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


/*var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});*/

var largestProductOfThree = function(array) {
	var arr=array.sort(function(a, b){return b-a});
	//console.log(arr);
	var product=1
	for (var i = 0; i <3; i++) {
		product=product*arr[i];
	}
	return product;
};


/*
var largestProductOfThree = function(array) {
	var arr=array.sort(function(a, b){return b-a});
	console.log(arr);
	var product=arr[0]
	for (var i = 1; i <3; i++) {
		console.log(product)
		product=product*arr[i];
	}
	return product;
};

/////

var largestProductOfThree2 = function(array) {
	
	var product=1
	for (var i = 0; i < array.length; i++) {
        if(array[i] > array[i+1]){
        	console.log(array[i],array[i+1])
        	var swap=array[i+1];
        	array[i+1]=array[i];
        	array[i]=swap;
        	console.log(array[i],array[i+1])
        	console.log(array);
        	i=0;
        }
	}
	console.log(array);
	return product;
};