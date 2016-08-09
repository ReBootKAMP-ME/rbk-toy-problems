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

  ab




	



  */

var allAnagrams = function(string) {
	var result=[];
	if(string.length=0){
		
	}
	else{
		var temp="";
		for (var i = 0; i < string.length; i++) {
			temp +=string[i];
		}
		result.push(temp);
		var c1=temp[0];
		var c2=temp[string.length-1];

		temp[0]=c2;
		temp[string.length]=c1;
		allAnagrams(temp);


	}

};



