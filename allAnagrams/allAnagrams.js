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

var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}


var allAnagrams = function(string) {
	var str="";
	var results=[];
	var randomAr=[];
	var fac=factorial(string.length);
	for (var i = 0; i < string.length; i++) {
		var random=Math.floor(Math.random()*i);
		if(randomAr.indexOf(random) === -1){
			randomAr.push(random);
			str+=string[random];
		}
	}
	if(results.indexOf(str) === -1){
		results.push(str);
		fac--;
	}

	if(results.length !== fac){
		allAnagrams(string);
	}else{
		return results;
	}
};

//lecture solution
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
