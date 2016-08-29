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
	var palindrome = [];
	var indexE = 0;
  
  for (var s = 0; s < string.length; s++) {
  	var loPal = function(indexE){
  		var str1 = '';
  		var str2 = '';
		  for (var i = s; i < indexE; i++) {
		  		str1 += string[i];
		  }
		  for (var i = indexE-1; i >= s; i--) {
		  	str2 += string[i];
		  }
		  if(str1 === str2){
		  	palindrome.push(str1)
		  }
		
	  	if(indexE !== string.length-1){
	  		loPal(indexE+1)
	 		}			
	  }
	  loPal(indexE);
	}
	var counter = palindrome[0].length;
	var result;
	for (var i = 0; i < palindrome.length; i++) {
		if(palindrome[i].length > counter){
			counter = palindrome[i].length;
			result = palindrome[i];
		}
	}
  return result;
};