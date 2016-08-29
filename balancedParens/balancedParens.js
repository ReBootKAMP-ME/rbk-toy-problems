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

 var balancedParens = function (input) {
 	var a='(';
 	var b=')';
    var counterB = 0;
 	var counterA = 0;

 	for(var i=0 ; i<input.length ; i++){
 	if(input.length === 1 && input[i]===a || input[i]===b)
   		return false;
   	if(input[i] === a && input[i+1] === b && input.length === 2)
   		return true;
   }
   
   	if(input.length > 2){
   		if(input.length%2 !== 0){
   			return false;
   		}
   		else
   		{
   			for(var x=0 ; x<input.length ; x++){
   				console.log(input);
   				if(input[x] === a)
   					counterA++;
   				if(input[x] === b)
   					counterB++;
   			}
   			if(counterA === counterB)
   				return true;
   		}
   	}
   		
   };
   
 (()((((((())))))))  	

  
 

