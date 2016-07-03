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
   var result = false;
   var arrayPar=input.split("");
   var arrayNew=[];
   var counter=0;
   if(arrayPar.length===2){
   	if(arrayPar[0]==='('&&arrayPar[1]===')'){
   		result =true;
   	}
   }else{
   for(var i=0;i<arrayPar.length;i++){
   	if(arrayPar[i]==='('&&arrayPar[arrayPar.length-1-i]===')'){
   		counter++;
   	}
   }
   if(counter===(arrayPar.length)/2){
   	result=true;
   }}
   return result;
 };

var balancedParens = function (input) {
	var result=false;
	var arrayPar=input.split("");
}


//My tries for step 2:
// var Other=function(input){
// 	var arrayPa=input.split("");
// 	arrayNew=[];
// 	var res=false;
// 	var counter=0;
// 	function twice(array){
// 	counter++;
// 	if(counter===arrayPa.length/2){
// 		return res;
// 	}
// 	if(array.length===2){
// 		if(array[0]==='['){
// 			if(array[1]===']'){
// 				res= true;
// 			}
// 		}
// 		if(array[0]==='{'){
// 			if(array[1]==='{'){
// 				res=true;
// 			}
// 		}
// 		if(array[0]==='('){
// 			if(array[1]===')'){
// 				res=true;
// 			}
// 		}
// 	}else{
// 		for(var i=0;i<array.length;i++){
// 			var temp=[];
// 			temp.push(array[i],array[array.length-1-i]);
// 			arrayNew.push(temp);
// 		}
// 		for(var j=0;j<arrayNew.length;j++){
// 			twice(arrayNew[i]);
// 		}
// 	}}
// 	twice(arrayPa);
// 	return res;
// }

