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

//for two strings only
var commonCharacters = function(string1, string2) {
  str1=string1.split("");
  str2=string2.split("");
  var common=[];
  var result=[];

  for (var i = 0; i < str1.length; i++) {
  	for (var k = 0; k < str2.length; k++) {
  		if(str1[i]===str2[k]){
  			common.push(str1[i]);
  		}
  	}
  }
  // to return common characters without duplication
  for (var i = 0; i < common.length; i++) {
  	 	if(result.indexOf(common[i])<=-1){
  		result.push(common[i]);
  		}
  }

  return result.join("");
  console.log(result.join(""));
};


//Extra credit

var commonCharacters2 = function(string1, string2, string3) {
  var strings= arguments;
  var result="";
  for (var i = 1; i < strings.length; i++) {
  	result = commonCharacters(strings[0],strings[i]);
  }

  return result;
};



