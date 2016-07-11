8888888888888888888888888888888ى  ى /**
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
function treeHelper(char,array){
	var result=[];
	str=char;
	for (var i=0;i<array.length;i++){
		for (var k=i;k<array.length;k++){
			str=str+array[k];

		}
		result.push(str);
       treeHelper(array[i+1],array)
	}
	//return result;
}
var allAnagrams = function(string) {
	
};