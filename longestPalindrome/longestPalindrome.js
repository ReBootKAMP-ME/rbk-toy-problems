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
	var array=[];
	var newStr=string.split(' '); // my dad is a athlete
	for (var i = 0; i < newStr.length; i++) {
		var length=newStr[i].length-1;
		for (var j = 0; j < newStr[i].length; j++) {
			if (newStr[i][j] === newStr[i][length]){
				if(length === j){
					array.push(newStr[i]);
			    }
			    length--;
			}else{
				break;
			}
		}
	}
	var longest = arr.reduce(function (a, b) {
	 return a.length > b.length ? a : b; });
	return longest; 
};