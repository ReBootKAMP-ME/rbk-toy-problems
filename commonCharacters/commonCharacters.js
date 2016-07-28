/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('aceixvou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:
var recursiveCommChars = function(result, str1, str2){	
	if(str1.length === 0){
		return result;
	}
	if(str2.indexOf(str1[0]) !== -1 ){
		result += str1[0];
		for(var i=1; i<str1.length; i++){
			if(str1[i] === str1[0]){
				str1.splice(i,1);
			}
		}
	}
	str1.splice(0,1);
	return recursiveCommChars(result, str1, str2);
}

var commonCharacters = function(string1, string2) {
	return recursiveCommChars('', string1.split(''), string2.split(''));
};