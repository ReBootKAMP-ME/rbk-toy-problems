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
	var returnArray = [] 
	var helperFunction = function ( s, arr ) {
		if(arr.length === s.length){
			returnArray.push(arr.join(''));
			return;
		}
		arr.push(s)
		return helperFunction(s, arr);
	}
	for (var i = 0; i < string.length; i++) {
		helperFunction(string[i], []);
	}
	return returnArray;
};





