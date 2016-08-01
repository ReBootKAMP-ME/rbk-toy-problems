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
  //[ ,  , , , 'cba' ]
  */
var arr=[];
var allAnagrams = function(string) {
  if(string===" "){
  	return arr[];
  }else{
  for (var i = 0; i < string.length; i++) {
  	  var str=string[i]
  	  for (var y = i+1; y < string.length ; y++) {
  	  	str=str+string[y];
  	  }
  	  
  	  arr.push(str)
  }
  return arr;
}
};