


/*Problem 3 (Advanced):
Create an algorithm to count the number of zeros that appear between 1 and N.
Examples:
There are 2 zeros from 1 to 20: 10, 20
There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31

 */


function countZeros(number){
	var counter = 0;
	if(number < 10){
		return "NO ZEROS";
	} else {
		for(var i = 10; i <= number ; i++ ){
			 var array = i.toString().split("")
			for(var j = 0 ; j<array.length; j++){
				if(array[j] === "0"){
					counter++;
				}
			}
		}
	}
	return counter;
}



/* 
Problem 2:
Create a function 'every' which returns every nth element of an array, starting from start_index. Both interval and start_index are optional.
This is how the function will be invoked: every(array, interval, start_index)
Examples:
every([0,1,2,3,4])     // [0,1,2,3,4]
every([0,1,2,3,4],1)   // [0,1,2,3,4]
every([0,1,2,3,4],2)   // [0,2,4]
every([0,1,2,3,4],3)   // [0,3]
every([0,1,2,3,4],3,1) // [1,4]
*/

var every = function(array , interval , startIndex){
	var resultArray = [];
	if(interval === undefined || interval ===1)
		return array;
	else if(startIndex === undefined)
		startIndex=array[0];
	
	for(var i=startIndex ; i<array.length ; i=i+interval){
		resultArray.push(array[i]);
	}
	return resultArray;
}

/*
Problem 1:
Create function that takes one positive three digit integer 
and re-arranges its digits to get maximum possible number. 
Assume that argument is integer. Return null if argument is not valid.
Example: maxRedigit(123); // returns 321
*/

var sort = function(num){
	var array = num.toString().split("");
	var resultArray = [];
	var max = array[0];
	for(var i=1 ; i<array.length ; i++){
		if(max < array[i]){
			max = array[i];
		}
		if(i=array.length ){
		resultArray.push(max);
		array.slice(i,1);
		max=array[0];
	}

	}
	return resultArray;
}
