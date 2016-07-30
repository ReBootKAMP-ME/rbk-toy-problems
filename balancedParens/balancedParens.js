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

 // Still need fixing

 var balancedParens = function (input) {
  var left=[];
  var right=[];
  if (input.indexOf(')')< input.indexOf('('))
  	return false;
	  else {
	  for (var i = 0; i < input.length; i++) {
	  	if(input[i] === '(' || input[i] === '{' || input[i]==='['){
	  		left.push(input[i]);  	
	  	}
	  else if (input[i]===')' || input[i] === '}' || input[i]===']')
	  	right.push(input[i])
	  }
	}
   if(left.length !== right.length)
  			return false;
  		else {
			  for (var i = 0; i < left.length; i++) {
			  	for (var j = right.length - 1; j >= 0; j--){
			  		// for (var j = 0; j < right.length; j++) {
			  	    if((right[j] === '}' && left[i] === '{') ||(right[j] === ')' && left[i] === '(') ||(right[j] === ']' && left[i] === '['))
			  			return true;
			  		return false;
			  	}
			  }
			}
 };
