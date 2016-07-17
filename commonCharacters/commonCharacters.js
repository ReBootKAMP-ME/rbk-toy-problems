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
var arr = [];
var First =string1.split('');
var Second = string2.split('');
	for (var i = 0; i < First.length; i++) {
		if(arr.indexOf(First[i])===-1){
			for (var j = 0; j < Second.length; j++) {
				if(First[i]===Second[j]){
					if(arr.indexOf(First[i]) === -1){
					arr.push(First[i])
					}
				}
			}
		}	
	}
    return arr.join('')  
};
//Extra 
var commonCharacters = function() {
var arr = [];
var First =arguments[0].split('');
var Second = arguments[1].split('');
		for (var i = 0; i < arguments[0].length; i++) {
			for (var j = 0; j < arguments[1].length; j++) {
				if(First[i]===Second[j]){
					if(arr.indexOf(First[i]) === -1){
					arr.push(First[i])
					}
				}
			}	
		}
    return arr.join('')  
};