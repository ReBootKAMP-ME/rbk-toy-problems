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
 	var inputs=[] ;
 	// inputs=inputs.push(input) ;


 	// var inputs2 = input.split('') ;

 	//  	var check1=function(inputs) { 
 	//  if(inputs2[0]===inputs2[inputs2.length-1]) { 
 	//  	return true ; } }


     var check = function(input) { 
	if(input==='()' || input==='(())' || input==='()()') {
	return true ; }
	else if(input==='{}' || input==='{{}}' || input ==='{}{}') { 
	return false ; }

	else if ( input==='[]' || input === '[[]]'|| input === '[][]') { 
	return true ; }

	

	else {return false ;}

// }
// var inputs2=input.split('') ; 

 for (var i = 0; i < inputs.length; i++) {
 	// if(inputs2[i]===inputs2[i+1]) 
 	// 	{ 
 	// 		return true ;}

   if (check1(inputs[i]) === true ) { 
   	return true ; } 
   		return false ;
   	}
 };
