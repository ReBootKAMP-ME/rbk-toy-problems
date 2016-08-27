/**
* Implement a function that finds the longest palindrome in a given string.
* Palindrome is a string that is the same when you read it from right to left
* and from left to right.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).

* Extra credit: The best solution for this problem runs in linear time.
* If you would like a challenge, read about Manacher's algorithm
*/

var longestPalindrome = function (string) {
	var arrayAll=[]
	var result="";
	for(var i=0;i<string.length;i++){
		for(var j=i+1;j<string.length;j++){
			if(string[i]===string[j]){
				var temp=string.substring(i,j+1);
				arrayAll.push(temp);
			}
		}
	}
	for(var k=0;k<arrayAll.length;k++){
		var counter=0;
		for(var w=0;w<arrayAll[k].length;w++){
			counter++;
			if(arrayAll[k][w]!==arrayAll[k][arrayAll[k].length-counter]){
				arrayAll.splice(k,1);
		}
	}
	for(var e=0;e<arrayAll.length;e++){
		if(arrayAll[e].length>result.length){
			result=arrayAll[e];
		}
	}
	return result; 
};