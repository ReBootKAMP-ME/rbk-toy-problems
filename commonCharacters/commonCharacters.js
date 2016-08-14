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
//first attempt
var commonCharacters = function(masterString) {
	var returnString = "";	
	for (var i = 1; i < arguments.length; i++) {
		returnString =  commonHelper(masterString, arguments[i], returnString);
	}
  	return returnString;
};
var commonCharactersHelper = function(masterString, string2, returnString) {
	    for(var i = 0; i < returnString.length; i++){
			if(string2.indexOf(returnString[i]) === -1){
				returnString = returnString.split('');
				returnString.splice(i,1);
				returnString = returnString.join('');
			}
		}
		for(var i = 0; i < masterString.length; i++){
			if(string2.indexOf(masterString[i]) !== -1 && returnString.indexOf(masterString[i] === -1 && masterString[i] !== ' ' && string2.indexOf(returnString[i]) >= 0)){
				returnString = returnString + masterString[i];
			}
		}

		
		return returnString;
	}

//second attempt
var commonCharacter = function (char, string) {
		if(string.indexOf(char) === -1)
			return false;
		return true;
	}
var commonCharacters = function(masterString) {
	var returnString = "";	
	for (var i = 0; i < masterString.length; i++) {
		for (var j = 1; j < arguments.length; j++) {
			 if(commonCharacter(masterString[i], arguments[i])){
			 	returnString = returnString + masterString[i];
			 }
		}
	}
	
  	return returnString;
};