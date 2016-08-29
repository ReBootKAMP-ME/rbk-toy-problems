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


//' dad '.split('').reverse().join('')

var longestPalindrome = function (string) {
	var temp = [];
  var arr = string.split(' ');
  for (var i = 0; i < arr.length; i++) {
  	var reverse = arr[i].split('').reverse().join('')
  	//console.log(reverse);
  	if (string.indexOf(reverse) !== -1) {
  		console.log('im here')
  		if (string.indexOf(string[string.indexOf(reverse)-1] + reverse + string[reverse.length + 1]) > -1){
  		console.log("bigger"+ string[string.indexOf(reverse)-1]+ reverse + string[reverse.length+1])
  		}
  		temp.push(reverse);
  	}
  }
  return temp;
};