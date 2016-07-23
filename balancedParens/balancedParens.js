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
   input=input.split("");
   var openBracket=0;
   var closeBracket=0;
   var openCurly=0;
   var closeCurly=0;
   var openSq=0;
   var closeSq=0;
   var brackets=[];
   for (var i = 0; i < input.length; i++) {
   	if(input[i]==="("){
   		openBracket++;
   	}else if(input[i]===")"){
   		closeBracket++
   		if(closeBracket>openBracket){return false;}
   	}else if(input[i]==="{"){
   		openCurly++;
   	}else if(input[i]==="}"){
   		closeCurly++;
   	}
   }
   if(openBracket===closeBracket && openCurly===closeCurly && openSq===closeSq){
   	return true;
   }else{
   	return false;
   }
 };
