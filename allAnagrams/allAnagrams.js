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


var allAnagrams = function(string) { //'abc'
	string=string.split("");//[a,b,c]
	var result=[]; 
	//debugger;
	var combine=function(string){
		combination=[];
		while(combination.length!==3){
		var rand = string[Math.floor(Math.random() * string.length)];
		if(combination.indexOf(rand)<=-1)
		combination.push(rand);
		}
		combination=combination.join("");
	}
	if(result.indexOf(combination)<=-1){
			result.push(combination);
			}else{
			combine(string);
			}

return result;
}