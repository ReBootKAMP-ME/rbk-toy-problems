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
var isPalindrome = function (string) {
  for (var i = 0; i < Math.floor(string.length/2); i++) {
    if (string[i] !== string[string.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}
var longestPalindrome = function (string) {
  //split
  //find palindrome words
  //which is the longest
  //for the longest, check how many characters after and before after and before the spaces do not effect the palindrome, and return that
  var compArr = string.split(' ');
  var comp = '';
  var position = 0;
  for (var i = 0; i < compArr.length; i++) {
    if (isPalindrome(compArr[i]) && (compArr[i].length > comp.length)) {
      comp = compArr[i];
      position = i;
    }
  }
 
  var flag = true;
  if (!!compArr[position - 1] && !!compArr[position + 1]) {
    comp = ' ' + comp + ' ';
    var before = compArr[position - 1].split('');
    var after = compArr[position + 1].split('');
    var i = 0
    while(flag) {
      var bChar = before.pop();
      if ( bChar === after[i]) {
        comp = bChar + comp + after[i];
      } else {
        flag = false
      }
      i++;
    }
  }
  return comp;
};