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
   // write your code hre
   if(input.length%2 === 1){
   	return false;
   }
   else if ((input[0]=== ")") && (input [1]==="(")){
   	return false;
   } 
   else {
   	return true;
   }
 };

var balancedParens = function (input) {
	var firstpart=input.slice(0,input.length/2);
   	var secondpart=input.substr(input.length/2);
   if(input.length%2 === 1){
   	return false;
   }
   else if ((input[0]=== ")") && (input [1]==="(")){
   	return false;
   } 
   else {
   	return true;
   }
   for(var i=0 i<firstpart.length ;i++){
   	 for(var j=0 j<secondpart.length ;j++){
  if((input.length%2===0) && (firstpart(i)===secondpart(j))){
   	return true;
   		}
   	}
   }
 };


