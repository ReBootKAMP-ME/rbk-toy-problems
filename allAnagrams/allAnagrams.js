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


var indexOfFunc= function(arr, val){
	for(var i=0; i<arr.length; i++){
		if(arr[i] === val){
			return true;
		}
	}
	return false;
}

var pushIntoArr = function(arr, val){
	var array = [];
	for(var i=0; i<arr.length; i++){
		array.push(arr[i]);
	}
	array.push(val);
	return array;
}

var allAnagrams = function(string) {
	var resultArr =[];

	var recursiveFunc = function(accumStr, count, indexArr){

		if(count === string.length){
			if(resultArr.indexOf(accumStr) === -1){
				resultArr.push(accumStr);
			}
		}

		for(var i=0; i<string.length; i++){
			if(!indexOfFunc(indexArr, i)){
				recursiveFunc(accumStr + string[i], count+1, pushIntoArr(indexArr,i))
			}
		}
	}

	recursiveFunc('',0, []);

	return resultArr;
};