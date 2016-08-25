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


// 
function rotate(array, steps){
	var newArray = [];
	for(var i = 0; i < array.length;i++){
		newArray.push(array[i]);
	}
	if(steps === 0){
		return array;
	}
	if(steps < 0){
		for(var i = 0; i < Math.abs(steps); i++){
			var temp = newArray[0];
			newArray.shift();
			newArray.push(temp);
		}
	} else {
		for(var i = 0; i < steps; i++){
			var temp = newArray[newArray.length-1];
			newArray.pop();
			newArray.unshift(temp);
		}
	}
	return newArray;
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
  if(num < 10){
  	return -1;
  }
  // always start from the ones position and switch it with the tens
  var number = num.toString().split('')
  for(var i = number.length-1; i >= 0; i--){
  	if(number[i] > number[i-1]){
  		var temp = number[i-1];
  		number[i-1] = number[i];
  		number[i] = temp;
  		break;
  	} else {
  		continue;
  	}
  }
  number = JSON.parse(number.join(''));
  if(number > num){
  	return number;
  } else {
  	return -1;
  }
};

