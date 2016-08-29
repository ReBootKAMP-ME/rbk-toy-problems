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
  var maxLength = 1;  
  var  start = 0;
  var low;
  var high;
    for (var i=1; i<string.length;i++)
    {
        low = i - 1;
        high = i;
        while (low >= 0 && high <string.length && string[low] === string[high])
        {
            if (high - low + 1 > maxLength)
            {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;
        }
        low = i - 1;
        high = i + 1;
        while (low >= 0 && high <string.length && string[low] === string[high])
        {
            if (high - low + 1 > maxLength)
            {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;
        }
    }
   var str= string.substring(start,start + maxLength - 1)
   console.log(str);
return maxLength;
  
};