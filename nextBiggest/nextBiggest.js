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
  // If steps is larger than array.length, then we can remove unnecessary rotations and just
  // rotate the remainder of the steps.
  var steps = steps % array.length;

  //Here we will take the tail of the array that we need to put at the beginning of new array: 
  var tailOfArray = array.slice(-steps);

  //Then we need to find the rest of the new array
  var restOfArray = array.slice(0, -steps)

  //Return the combined new array:
  return tailOfArray.concat(restOfArray);
};


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
  //Let's pretend the number is 20175
  //Convert number to digits array ([2,0,1,7,5]);
  var digits = num.toString().split('');
  var i = digits.length-1; //4

  //Find the first digit from the end of the number that is bigger than previous digit (7 in this case)
  while(i > 0) {
    if (digits[i]>digits[i-1]) break;
    i--;
  }

  //If we could not find the digit that is bigger than previous, this is the biggest possible number
  //and we can't find a bigger number
  if (i == 0) return -1;

  //Otherwise, remove all digits after digit at index i. Splice will return the array of removed 
  //digits, we will sort these digits and put them into newArr
  //In this case, i=3 and digits array will become [2,0,1], the newArr will be [5,7]
  var newArr = digits.splice(i, digits.length - i).sort();
  
  //Take the last digit from digits array. In this case 1;
  var t = digits[digits.length-1];

  //Find the first number in the newArr that is larger than last number in digits array
  //In this case 5, so i=0;
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] > t) break;
  }

  //Make last digit in digits array equal to the next bigger digit 5
  digits[digits.length-1] = newArr[i]
  
  //Replace 5 with 1 in the newArr
  newArr[i] = t;

  //take digits array and concatenate newArr to it. This will be all digits of the number in the
  //new order
  var result = digits.concat(newArr); //[2,0,5,1,7]

  var n = parseInt(result.join(''));//convert back to number
  return n;
};
