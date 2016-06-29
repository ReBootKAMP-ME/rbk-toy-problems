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

//newArr=[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
var allAnagrams = function(string) {//string="abc"
	var newArr=[];	//newArr=[]
	var length=string.length
	for (var i = 0; i <length; i++) {//"a","b","c"
		var result=allAnagrams(string[i], string.substr(0, i) + string.substr(i+1))// "a","b"
	for (var j = 0; j < result.length; i++) {
		  newArr.push( result[j]);

	}
}
	return newArr;

};

