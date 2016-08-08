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
   var str = input.split('')
   var bool = true
   var count = 1
   for(var i = 0; i < str.length/2; i++){
   	if(str[i] === '('){
   	   	for (var j = str.length - count; j > str.length/2; j--) {
   	   		if(str[j] === ')'){
   	   			bool = bool && true
   	   			count++
   	   		} else {
   	   			bool = bool && false
   	   		}
   	   	}
   	}
   }
   return bool
 };
