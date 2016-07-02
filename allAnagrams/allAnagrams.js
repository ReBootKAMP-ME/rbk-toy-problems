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
// var allAnagrams = function (string)
// {
//     var result = [];

//     var repeats = function (start,depth,prefix)
//     {
//         for(var i=start; i<string.length; i++)
//         {
//             var next = prefix+string[i];
//             if (depth > 0)
//                 repeats (i+1,depth-1,next);
//             else
//                 result.push(next);
//         }
//     }

//     for(var i=0; i<string.length; i++)
//     {
//         repeats(0,i,'');
//     }

//     return result;
// }



var allAnagrams = function(string) {
	var StrArr=[] ; 
	StrArr =string.split('') ;
	var NewArry=[] ;
	
		for (var i = 0; i <StrArr.length; i++) {
			for (var j = 0; i <StrArr.length; j++) {
				for (var k = 0; k < StrArr.length; k++) {
				
				}
				
			}
			NewArry.push(StrArr[i][j][k]) 
		}

		return NewArry ;
};

