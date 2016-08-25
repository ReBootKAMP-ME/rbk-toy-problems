/*

**** PICK ONE OF THE TWO PROBLEMS ****

Problem 1 (Medium):
Create a function named "rotate" that takes an array and returns a new one
with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. 
If n is less than 0 it should rotate the array to the left. 
If n is 0, then it should return the array unchanged.

Examples:

Should work on arrays of any data types:
rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
rotate([true, true, false], 1) // => [false, true, true]

var data = [1, 2, 3, 4, 5];
rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3]
rotate(data, 5) // => [1, 2, 3, 4, 5]
rotate(data, 0) // => [1, 2, 3, 4, 5]
rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -5) // => [1, 2, 3, 4, 5]

The rotation shouldn't be limited by the indices available in the array. 
Meaning that if we exceed the indices of the array it keeps rotating.

rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]

*/

function rotate(array, steps){
	var result = [], index;
	
	steps = steps % array.length;
	
	if(steps >= 0){
		index = array.length-steps;
	} else {
		index = Math.abs(steps);
	}
	for(var i=index; i<array.length; i++){
		result.push(array[i]);
	}
	for(var i=0; i<index; i++){
		result.push(array[i]);
	}
	return result;
}


/*
Problem 2 (Advanced)
You have to create a function that takes a positive integer number and returns the 
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/
function nextBigger(num){
	if(Math.floor(num) !== num || num < 10){
		return -1;
	}
	num = Math.floor(num);
	var numbers = num.toString().split('');
	var combinations = [];

	function getCombinations(accum, remainingValues){
		if(remainingValues.length === 0){
			combinations.push(accum);
		}
		for(var i=0; i<remainingValues.length; i++){
			var tempArr = remainingValues.slice();
			var tempAccum = accum + tempArr.splice(i,1);
			getCombinations(tempAccum, tempArr);
		}
	};
	getCombinations('',numbers);

	var largerNums = [];
	for(var i=0; i<combinations.length; i++){
		combinations[i] = parseInt(combinations[i]);
		if(combinations[i] > num){
			largerNums.push(combinations[i]);
		}
	}

	if(largerNums.length === 0){
		return -1;
	}

	var biggerNum = largerNums[0];
	for(var i=1; i<largerNums.length; i++){
		if(largerNums[i] < biggerNum){
			biggerNum = largerNums[i];
		}
	}
	return biggerNum;  
};

