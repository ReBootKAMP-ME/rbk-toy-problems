/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:
var commonCharacters = function(string1, string2) {
  var arrOfsttring1=string1.split("");
  var arrOfsttring2=string2.split("");
  var result=[];
  for (var i = 0; i < arrOfsttring1.length; i++) {
  	for (var j = 0; j < arrOfsttring2.length; j++) {
  		if(arrOfsttring1[i] === arrOfsttring2[j] && arrOfsttring2[j] !== " " )
  			result.push(arrOfsttring2[j])
  		}
  	}
  
  return result.join("");
};

console.log(commonCharacters('acexivou', 'aegihobu'))




//===================================================================

// var commonCharacters1 = function(string1, string2) {
// 	var length = arguments.length;
// 	var result=[];

	

// 	for (var a = 0; a < arguments.length; a++) {
// 		for (var i = 0; i < arguments.length; i++) {
// 			for (var j = 0; j < arguments[0].length; j++) {
// 				if(arguments[a][j] === arguments[i][j] && arguments[a] !== arguments[i])
// 					result.push(arguments[i][j]);
// 			}
// 		}
// 	}
//   	return result.join("");
  	  
// };

// console.log(commonCharacters1('acexivou', 'aegihobu'));



