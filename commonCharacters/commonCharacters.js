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


var commonCharacters = function(){
	var firstArg= arguments[0];
	var result='';
	var restArgs = Array.from(arguments).slice(1);
	for (var i = 0; i < firstArg.length; i++) {
		for (var k = 0; k < restArgs.length; k++) {
			if (restArgs[k].includes(firstArg[i])){
				if(!result.includes(firstArg[i]) && firstArg[i]!== " ")
				result+= firstArg[i];
			}
		}
	}
	return result;
};