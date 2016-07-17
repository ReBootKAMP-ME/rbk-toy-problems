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
 	var counterfor1 =0;
	var counterfor2 =0;
	var counterfor3 =0;
	var counterfor4 =0;
	var counterfor5 =0;
	var counterfor6 =0;
 	// if(input.length%2===1){
 	// 	return false;
 	// }
  for (var i = 0; i < input.length; i++) {
  	if(input[i]==='{'){
  		counterfor3++
  	}else if(input[i]==='}'){
  		counterfor4++
  	}else if(input[i]==='['){
  		counterfor5++
  	}else if(input[i]===']'){
  		counterfor6++
  	}
  	else if(input[i]==='('){
  		counterfor1++
  	  }else if(input[i]===')'){
  	  		counterfor2++
  	  }
  	}
  	if(counterfor1===counterfor2){
  		return true;
  	}else if(counterfor3===counterfor4){
      return true;
    }else if (counterfor5===counterfor6){
      return true;
    }
  	return false;
 };
