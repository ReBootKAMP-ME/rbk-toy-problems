/**
* Implement a function that finds the longest palindrome in a given string.
* Palindrome is a string that is the same when you read it from right to left
* and from left to right.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).

* Extra credit: The best solution for this problem runs in linear time.
* If you would like a challenge, read about Manacher's algorithm
*/

var longestPalindrome = function (string) {
  var statment = string.split(" ");
  var palindromes = [];
  var count = 0;
  var max = '';
  for (var i = 0; i < statment.length; i++) {
  	count = 0
  	for (var j = 0; j < Math.floor(statment[i].length/2); j++) {
  		if(statment[i][j] === statment[i][statment[i].length - 1 - j]){
  			count++;
  		}
  		if (count === Math.floor(statment[i].length/2)) {
  			palindromes.push(statment[i]);
  		}
  	}
  }
  for (var i = 0; i < palindromes.length; i++) {
  	if(palindromes[i].length > max.length){
  		max = palindromes[i];
  	}
  }
  return max
};

