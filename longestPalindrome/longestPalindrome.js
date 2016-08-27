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
  var startIndex = 0, length = 1, tempLength = 1, result = '';
  for (var i = 1; i<string.length-1; i++) {
  	if(string[i+1] !== ' ' && string[i+1] === string[i-tempLength]){
  		tempLength +=2;
  	} else {
  		if (tempLength > length){
	  		length = tempLength;
	  		startIndex = i-tempLength+1;
	  	}
	  	tempLength = 1;
  	}
  }
  for(var i = startIndex; i < startIndex+length; i++){
  	result += string[i];
  }
  return result;
};