// Problem 1:
// Write a function characterFrequency that takes as its input a string and returns an object with letters as keys and the number of times a letter appeared in the string as value
// For example, characterFrequency('mississippi');
// should return {m:1, i:4, s:4, p:2}
// What time complexity is your solution?

var characterFrequency = function (string) {
  var arrOfString = string.split("");
  var obj= {};
  //this for give init value 0
  for (var i = 0; i < arrOfString.length; i++) {
   obj[arrOfString[i]]=0;     
  }
  //to add 1 for every char 
  for (var i = 0; i < arrOfString.length; i++) {
    obj[arrOfString[i]]+=1;
  }

  return obj;
}





// Problem 2:
// Find the first item that occurs an even number of times in an array.
// evenOccurrence([1, 2, 4, 5, 6, 6, 4]); should return 4 because it's the first number that occurs even number of times in the array
// What time complexity is your solution?








// Problem 3 (Advanced):
// Write a function that, given a string, Finds the longest run of identical
// characters and returns an array containing the start and end indices of
// that run. If there are two runs of equal length, return the first one.
// For example:
// longestRun("abbbcc") // [1, 3]
// longestRun("aabbc")  // [0, 1]
// longestRun("abcd")   // [0, 0]
// longestRun("")       // null