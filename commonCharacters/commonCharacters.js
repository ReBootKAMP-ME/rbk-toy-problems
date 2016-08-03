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


var commonCharacters = function() {
  var common=arguments[0].split("");
  //console.log(common);
    for (var y= 1; y< arguments.length; y++) {
    	var arrsrt=arguments[y].split("");
        for (var i = 0; i < common.length; i++) {
   	    if (arrsrt.indexOf(common[i])> -1){
   		   //if(common.indexOf(arguments[0][i])=== -1){
   		}else{
   			common.splice(i,1)
   			i--;
   		}

   	  	  console.log(common);  
   	  
   	
   }
}
   return common.join("");



};










/*var commonCharacters = function() {
  var common=[];
    for (var y= 1; y< arguments.length; y++) {
    	var arrsrt=arguments[y];
        for (var i = 0; i < arguments[0].length; i++) {
   	    if (arrsrt.indexOf(arguments[0][i])> -1){
   		   if(common.indexOf(arguments[0][i])=== -1){
   		

   		    common.push(arguments[0][i]);
   		}
   	  	    
   	  
   	
   }
}
   return common.join("");



};

*/

/*var commonCharacters = function(string1, string2) {
  var common=[];
  string2=string2.split("");
   for (var i = 0; i < string1.length; i++) {
   	 
   	if (string2.indexOf(string1[i])> -1){
   		if(common.indexOf(string1[i])=== -1){
   		

   		    common.push(string1[i]);
   		}
   	}
   }
   return common.join("");

};*/