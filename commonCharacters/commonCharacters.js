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
	if(string1 === "")
		return string2;
	if(string2 === "")
		return string1;
	var commonChars = [];
	for(var i=0 ; i<string1.length ; i++){
		for(var x=0 ; x<string2.length ; x++){
			if(string1[i] === string2[x]){
				if(commonChars.indexOf(string1[i]) < 0)
					commonChars.push(string1[i]);
			}
		}
	}
	commonChars = commonChars.join("");
	return commonChars;
};

///Extra
var commonCharacters2 = function(string1, string2){
	var strings = [];
	var result = "";
	for(var i=0 ; i<arguments.length ; i++)
		strings.push(arguments[i]);
	for(var i=0 ; i<strings.length ; i++){
		result = commonCharacters(strings[i],result);
	}
	return result;
};
