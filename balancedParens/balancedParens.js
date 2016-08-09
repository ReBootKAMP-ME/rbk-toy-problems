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
 	var x=input.split("");
 	var arr=[];
 	for(var i=0;i<x.length;i++){
		if(x[i]==="(" ||x[i]===")" || x[i]==="{" || x[i]==="}" || x[i]==="[" || x[i]==="]")
			arr.push(x[i]);
	}
	//console.log(arr);
 	var flage=false;
    for (var i = 0; i < arr.length; i++) {
   	var char=arr[i];
   	if(char==="("){
   		for (var j = i+1; j < arr.length; j++) {
   			if(arr[j]===")"){
   				arr.splice(j,1);
   				flage=true;
   				break;
   			}
   		}
   		if(flage){
   			arr.splice(i,1);
   			flage=false;
   			i--;
   		}

   	}
   	else if(char==="["){
   		for (var j = i+1; j < arr.length; j++) {
   			if(arr[j]==="]"){
   				arr.splice(j,1);
   				flage=true;
   				break;
   			}
   		}
   		if(flage){
   			arr.splice(i,1);
   			flage=false;
   			i--;
   		}
   	}
   	else if(char==="{"){
   		for (var j = i+1; j < arr.length; j++) {
   			if(arr[j]==="}"){
   				arr.splice(j,1);
   				flage=true;
   				break;
   			}
   		}
   		if(flage){
   			arr.splice(i,1);
   			flage=false;
   			i--;
   		}
   	}
   }
   if(arr.length===0)
   	return true;
   return false;
 };
