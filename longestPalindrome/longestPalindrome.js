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
  var word ;
  var array = [];
  for(var i = 0 ; i < string.length; i++){
  	if(string[i]=== string[i+2]){
  		var newWord;
  		word = string[i]+string[i+1]+string[i+2]+'';
  		newWord = checkPali(string,word);
  		array.push(newWord);
  	}
  }
  var largest = array[0];
  for(var i = 0; i < array.length; i++){
  	if(array[i].length > largest.length){
  		largest = array[i];
  	}
  }
  return largest;
};


var checkPali = function(string,index){
	// lets check for the one before and after

	// get the index of last word from the larger string 
	var nextLetter = string[string.indexOf(index) + index.length]
	var temp = string[string.indexOf(index)-1] + index + nextLetter +'';
	if(temp[0] === temp[temp.length-1]){
		console.log(temp);
		return checkPali(string,temp);
	} else {
		return index;
	}
}