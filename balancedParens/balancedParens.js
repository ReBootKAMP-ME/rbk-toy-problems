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
 	var s = input.split('');
    for (var i = 0; i < s.length; i++) {
   		if(s[i] === '('){
   			var flag = true;
   			//debugger;
   			for (var j = s.length - 1 ; j >= 0 && j > i; j--) {
   				if(s[j] === ')'){
   					s.splice(j,1);
   					s.splice(i,1);
    				flag = false;
    				i--;
    				j = 0;
   				}
   			}
   			if(flag){
   				return false;
   			}
   		}
   }
   if(s.length === 0){
   	return true;
   }
   else{
   	return false;
   }
 };
var balancedParens = function (input) {
 	var s = input.split('');
 	var open = ['(','{','[']
 	var close = [')','}',']']
    for (var i = 0; i < s.length; i++) {
   		if(open.indexOf(s[i]) !== -1){
   			var flag = true;
   			var index = open.indexOf(s[i])
   			//debugger;
   			for (var j = s.length - 1 ; j >= 0 && j > i; j--) {
   				if(s[j] === close[index]){
   					s.splice(j,1);
   					s.splice(i,1);
    				flag = false;
    				i--;
    				j = 0;
   				}
   			}
   			if(flag){
   				return false;
   			}
   		}
   }
   
   for (var i = 0; i < open.length; i++) {
   	if(s.indexOf(open[i]) === -1 && s.indexOf(close[i]) === -1)
   		return true;
   }
   return false;
 };