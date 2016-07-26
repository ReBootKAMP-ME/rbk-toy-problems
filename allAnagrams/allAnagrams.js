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
var random=function(max){
	return Math.floor(Math.random() * max) ;	
}

var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
var result=[];
var allAnagrams = function(string) {
	var indexOfString=string.split("");
	
	var word=[];

	if (result.length === factorial(indexOfString.length) ) {
		return result
	}
	
	while(word.length !== indexOfString.length){
		var char=indexOfString[random(indexOfString.length)];
		if (word.indexOf(char) === -1){
			word.push(char);
		}
	}
	if(result.indexOf(word.join("")) === -1){
		result.push( word.join(""))
	}
	return allAnagrams(string);
//creat the arr of words

};