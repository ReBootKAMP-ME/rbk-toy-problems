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
	var arrayResult=[];
	var arrayLetter=string.split("");
	counter=0;
	function more(str){
		counter++;
		if(str!==arrayLetter[arrayLetter.length-1]){
			return 1;
		}
		for(var i=1;i<arrayLetter.length;i++){
			str=str+arrayLetter[i];
		}
		arrayResult.push(str);
		more(arrayLetter[counter]);
	}
	more(arrayLetter[0])
	return arrayResult;
};