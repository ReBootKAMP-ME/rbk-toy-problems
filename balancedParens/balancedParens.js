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
 	var array=input.split("");
 	var result=false;
	var count=array.length-1;
 	if(array[0]==="(" ||array[0]==="[" ||array[0]==="{" && array.length%2===1){
 		for (var i = 0; i < array.length/2; i++) {
 			if(array[i]==="("){
 				if(array[count]===")"||array[i+1]===")"){
 					result= true;	
 				}
 				return result;	
 			}
 			if(array[i]==="["){
 				if(array[count]==="]"||array[i+1]==="]"){
 					result= true;	
 				}	
 				return result;
 			}
 			if(array[i]==="{" ){
 				if(array[count]==="}"||array[i+1]==="}"){
 					result= true;	
 				}
 				return result;	
 			}
 			count--;
 		};
 	}
 	return result;
 };


/* var balancedParens = function (input) {
 	var array=input.split("");
 	console.log(array)
 	if(array[0]==="(" ||array[0]==="["){
 		if(array.length%2===1){
 			return false;
 		}
 		for (var i = 0; i < array.length; i++) {
 			if(array[i]==="("){
 				if(array[i+1]===")"){
 					return true;
 				}
 				else if(array.slice(array.length/2)[i]===")"){
 					return true;
 				}
 				return false;
 			}
 			if(array[i]==="["){

 				if(array.slice(array.length/2)[i+1]==="]"){
 					return true;
 				}
 				return false;
 			}
 		};
 	}
 	return false;
 };
*/
