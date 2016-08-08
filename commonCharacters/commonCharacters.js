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
var commonCharacters = function(string, ...args) {
	if(Array.isArray(args[0])){
		args = args[0]
	}
	var result = []
	var strings = args.slice()
	
	for(var i = 0; i < string.length; i++){

		for(var j = 0; j < strings[0].length; j++){

			if(string[i] === strings[0][j] && result.indexOf(string[i]) === -1){
				result.push(string[i])
			}
		}
	}
	
	if(strings.length === 1){
		return result.join('')
	}

	return commonCharacters(result, strings.slice(1))
};