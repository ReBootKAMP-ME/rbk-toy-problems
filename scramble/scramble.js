/*
There are two problems - medium and advanced. 

Pick ONE problem to solve. If you have time, solve the other problem.

Toy problem 1 (MEDIUM):
Write a function scramble(str1,str2) that returns true if part of str1 characters
can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'satak' and str2 is 'steak' should return false.
str1 is 'steak' and str2 is 'steakk' should return false, because there is only one k in str1

Try to optimize your solution for time complexity.
*/

function scramble(str1,str2){
  //Let's create an object with str1 letters as keys and how many times the letter
  //is used as values
  var frequencies = {};
  str1.split('').forEach(function(letter){
    frequencies[letter] ? frequencies[letter]++ : frequencies[letter] = 1;
  });

  //Use .every function and check if every letter of str2 is in 'frequencies' object
  //We will reduce the count in frequencies for the letter that we found
  return str2.split('').every(function(letter){
    //Short way to do it:
    return --frequencies[letter] >= 0

    //longer way:
    // if(frequencies[letter]>0){
    //   frequencies[letter]--;
    //   return true;
    // };
    // return false;
  })

};

//What is the time complexity of your solution?
var timeComplexity = 'O(n)';

/*
Toy problem 2 (Advanced):
Rewrite your favorite splice method on array prototype.
The method you write should produce the same results as the original. 
The method should take 2 or more arguments:

The 'from' argument provides an integer number, 0 or greater, to be used as 
the first index to start changing the array from.

The 'count' argument provides an integer number, 0 or greater, that counts how many 
items should be removed from the 'from' index forward.

Any further arguments passed in will be new items to be inserted into the array, 
starting from the 'from' index. These extra arguments are optional.

The method should return an array containing all items removed by the splice, 
or an empty array if no items were removed (you can check how it works with built-in splice)

The original array should be modified after running splice.

Example:
var arr = [1,2,3,4,5,6];
//Remove 2 elements starting at index 2 and insert 7:
arr.splice(2,2,7);//should return [3,4] - the elements that were removed
console.log(arr); //should [1,2,7,5,6] - the original array was modified
*/

Array.prototype.splice = function(from,count){
  //If from is passed as negative, start at 0
  from  = Math.max(0, from);
  //If count is more than array length, take array length, also make sure it's not negative
  count = Math.max(0, Math.min(count, this.length));
  
  //Items to insert into array:
  var items  = Array.prototype.slice.call(arguments, 2);
  
  //These are items that will be removed from array and need to be returned from this method
  var result = this.slice(from, from + count);

  //Here we creat a copy of original array with correct items removed and inserted
  var source = this.slice(0, from).concat(items, this.slice(from + count));
  
  //Then we iterate over new array and replace items in original array
  for (var i = 0; i < source.length; i++) {
    this[i] = source[i];
  }
  
  //Making length of original array equal to length of new array removes all extra items
  //from original array that are beyond the length of new array
  this.length = source.length;

  //Return deleted items
  return result;
};