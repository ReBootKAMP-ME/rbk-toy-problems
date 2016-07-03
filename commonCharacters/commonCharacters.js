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
	var arr1=string1.split("");
	var arr2=string2.split("");
  for(var i=0;i<arr1.length;i++){
  	var res=result.split("");
  	if(arr2.indexOf(arr1[i])!==-1 && arr1[i]!== " " && res.indexOf(arr1[i])===-1){
  		result=result+arr1[i];
  	}
  }
  return result;
};
//Trial for the extra credait question
// var commonCharacters = function(string1, string2) {
// 	var result="";
// 	var inner=function(str1,str2){
// 	var arr1=str1.split("");
// 	var arr2=str2.split("");
//   for(var i=0;i<arr1.length;i++){
//   	if(arr2.indexOf(arr1[i])!==-1){
//   		result=result+arr1[i];
//   	}
//   }
//   if(arguments[2]!== undefined){
//   for(var i=0;i<=arguments.length;i++){
//   	if(arguments[i]===undefined){
// 	  return result
// 	}else{
// 		console.log(arguments[i])
// 	  	inner(result,arguments[i]);
// 	}}}}
// 	inner(string1,string2);
//   return result;
// };