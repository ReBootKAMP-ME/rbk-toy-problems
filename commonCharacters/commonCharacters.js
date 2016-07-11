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
// var commonCharacters = function(string1, string2) {
// 	var result="";
// 	for (var i=0; i<string1.length;i++){
// 		if(string2.indexOf(string1[i])>-1 && string1[i]!==" "){
// 			if(result.indexOf(string1[i])===-1)
//            result=result+string1[i];

// 		}
// 	}
// 	return result;
  
// };
// var commonCharacters = function() {
// 	var result="";
//     console.log(arguments[0][1]);
// 	for (var i=0; i<arguments[0].length;i++){
// 		for (var j=1;j<arguments.length;j++){
// 		if(arguments[j].indexOf(arguments[0][i])>-1 && arguments[0][i]!==" "){
// 			if(result.indexOf(arguments[0][i])===-1)
//            result=result+arguments[0][i];

// 		}
			
// 		}
// 	}
// 	return result;
  
// };
var commonCharactersHelper = function() {
	var result1="";
 for (var i=0; i<arguments[0].length;i++){
 	for (var j=1;j<arguments.length;j++){
     result1=commonCharacters(arguments[0],arguments[j]);
      for (var k=1;k<result1.length;k++)
 
 	     if(result.indexOf(result1[k])===-1)
 	     	result=result+result1;
 		}
 			
 	}
 	
 	return result;
   
 };
 
