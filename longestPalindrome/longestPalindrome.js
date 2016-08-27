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
	
	var addBounds = function(str){
		var arr = str.split('').join('|').split('')
		arr.unshift("|")
		arr.push("|")
		return arr
	}

	var removeBounds = function(arr){
		var removed = []

		for(var i = 0; i < (arr.length-1)/2; i++){
			removed.push(arr[i*2+1])
		}

		return removed
	}

	var charArr = addBounds(string)
  	var pal = []
  	var c = 0, r = 0;
  	var m = 0, n = 0;

  	for(var i = 1; i < charArr.length; i++){
  		if( i > r ){
  			pal[i] = 0
  			m = i - 1
  			n = i + 1
  		} else {
  			var index = c*2 - 1
  			if(pal[index] < (r - i)){
  				pal[i] = p[index];
  				m = -1
  			} else {
  				pal[i] = r - i
  				n = r + 1
  				m = i*2 - n
  			}
  		}
  		while( m >= 0 && n < charArr.length && charArr[m] === charArr[n]){
  			pal[i]++
  			m--
  			n++
  		}
  		if( (i + pal[i]) > r){
  			c = i
  			r = i + pal[i]
  		}
  	}

  	var len = 0
  	c = 0

  	for(var i = 1; i < charArr.length; i++){
  		if( len < pal[i] ){
  			len = pal[i]
  			c = i
  		}
  	}

  	var lps = charArr.slice(c-len, c+len+1)

  	return removeBounds(lps).join('')
};