/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var check=function(index1,index2){
   	if((index1 === '(' && index2 === ')') || (index1 === '{' && index2 === '}')
   		|| (index1 === '[' && index2 === ']'))
   		return true;
   	else
   		return false;
}
 var balancedParens = function (input) {
   var str=input.split('');
   var counter=0;
   if(str.length % 2 !== 0){
   		return false;
   }else{
 var length=str.length-1;
   for(var i=0; i<str.length/2 ; i++){
	   		var value=check(str[i],str[length]);
	   		if(value){
	   			length--;
	   		}
	   		else
	   			counter++;
   	}
   }
   if(counter >= 1 ){  // it means i have false cases
	   for (var i = 0; i < str.length; i++) {
	    	var value=check(str[i],str[++i]);
	    	if(value === false)
	    		return false;
	  	 	}
  	}
   return true;
 };
