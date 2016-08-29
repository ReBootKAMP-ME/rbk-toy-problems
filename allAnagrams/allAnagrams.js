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

  var find = function(string){
  	if(string.length === 1)
  		return string;
  	else{}
  	for(var i=0 ; i<string.length ; i++)
  	return i;
	}
  }

var allAnagrams = function(string) {
	var result = [];
	for(var i=0 ; i<array.length ; i++){
		result.push(i+find());
	}
	return result;

};