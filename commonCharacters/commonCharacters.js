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
	var result="";
	for (var i = 0; i < string1.length; i++) {
		var char=string1[i];
		for (var j = 0; j < string2.length; j++) {
			if(char===string2[j]){
				if(result.indexOf(char)===-1){
					result+=char;
					break;
				}
			}
		}
	}
	return result;
};

var commonCharactersForN = function(arrOfStrings) {
	var result="";
	if(arrOfStrings.length===0)
		return result;
	else{
		if(result===""){
			result=arrOfStrings[arrOfStrings.length-1];
			arrOfStrings.pop();
		}
		return result=commonCharacters(result,arrOfStrings[arrOfStrings.length-1]);
		arrOfStrings.pop();
	}
};