/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
	var anagrams = []
	var length = string.length

	var generateAnagrams = function(array, string, n, anagram){
		
		if(anagram.length === length){
			generateAnagrams(array, string, n+1, '')
		}

		if(array.length >= Math.pow(length, length)){
			return array
		}

		for(var i = 0; i < length; i++){
			
		}

		generateAnagrams(array, string, n, anagram)
	}
	generateAnagrams(array, string, 0, '')
};