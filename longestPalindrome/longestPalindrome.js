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
	var longestword=""
  for (var i =1; i <= string.length; i++) {
  	console.log(string.substr(0,i))
  	var stt='';
  	for (var y= string.substr(0,i).length-1; y >=0; y--) {
  		stt=stt+string.substr(0,i)[y]
  	}
  	if (stt===string.substr(0,i)&&string.substr(0,i).length>longestword.length){
  		//console.log("the same")
  		longestword=string.substr(0,i);
  		//console.log(longestword,"vghvh")

  	}else{
  		if(string.substr(0,i).length%2==1){
  			string=string.substr(i);
  			console.log(string)
  		}
  	}

  }
  return longestword
};