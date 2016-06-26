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
 	for (var i = 0; i < input.length; i++) {
 		if(input[i]===')'){
 			return false;
 		}else
 		if(input[i]==='('&&input[i+1]!==')'){
 			//console.log(false)
 			 }
 		 if(input[i]==='('){
 			for (var j = 1; j < input.length; j++) {
 				if(input[j]===')')
 					return true;
 				else{
 					if(input[j]==='('){
 					  for (var k = j+1; k < input.length; k++) {
 					  		if(input[k]===')'){
 					  			if(input[k+1]===')')
 					  				return true;
 					  		}
 					  	}
 						 return false;

 					}
 				}
 			}
 		}	
 		
 		}
 };
 // 	balancedParens('(');  // false
 // *   balancedParens('()'); // true
 // *   balancedParens(')(');  // false
 // *   balancedParens('(())');  // true
 // *
 // };
