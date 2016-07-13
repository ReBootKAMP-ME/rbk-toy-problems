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
  var result = [];

  function repeat(stringSoFar, restOfString){
    if(restOfString.length === 0){
      result.push(stringSoFar);
      return;
    }
    for (var i = 0; i < restOfString.length; i++) {
      var newStringSoFar = stringSoFar + restOfString[i];
      var newRestOfString = restOfString.slice(0,i) + restOfString.slice(i+1);
      repeat(newStringSoFar, newRestOfString);
    };
  }

  repeat('',string);

  return result;
};
var allAnagrams = function(string) {
	string=string.split("");
	result=[];
	for(var i=0;i<string.length;i++){
		for (var h = 0; h < string.length; h++) {
			for (var j = 0; j < string.length.length; j++) {
			result.push(string[i],string[h],string[j]);
			}
			
		}
	}
	return result;

};
var allAnagrams = function(string) {
	var result=[];
	function implement(element){
		for(var i=0;i<string.length;i++){
			result.push(string[i])+implement(string[i+1]);
		}
	}
   implement(string)
	return result;
};
