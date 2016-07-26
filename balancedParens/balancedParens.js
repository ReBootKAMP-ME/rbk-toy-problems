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
 *	"())"
 */

 var balancedParens = function (input) {
	var arrOfInput=input.split("");
	if(arrOfInput.length === 0 && open === close){
		return true;
	}
		
	var open = 0;
	var close= 0;
	for (var k = 0; k < arrOfInput.length; k++) {
	   	if(arrOfInput[k].charCodeAt(0) === 40){
	   		open++;
	   	}   
	   if (arrOfInput[k].charCodeAt(0) === 41) {
	   	close++;
	   }
	}

	for (var i = 0; i < arrOfInput.length; i++) {
		 if(arrOfInput[i].charCodeAt(0) === 40){
		 	for (var j = arrOfInput.length-1; j >= 0; j--) {
		 		if(arrOfInput[j].charCodeAt(0) === 41){
		 			return balancedParens(input.slice(i+1, j))
		 		}
		 	}
		 }
	}
	return false;
 };
	