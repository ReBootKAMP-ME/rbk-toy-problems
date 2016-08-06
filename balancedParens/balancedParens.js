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
   //console.log(input);
   for (var i = 0; i < input.length; i++){
   //console.log(input[i]);
   	if(input[i]==='('){
   		for (var y =input.length -1 ; y >i; y--) {
   			//console.log(input[y]);
           if(input[y]===')'){
   			//console.log("inside if ");

           	input=input.substr(i+1,y-1);
           	//input.splice(i,1);
            i--;
           }
      }
   		

}else if(input[i]==='['){
   		for (var y =input.length -1 ; y >i; y--) {
   			//console.log(input[y]);
           if(input[y]===']'){
   			//console.log("inside if ");

           	input=input.substr(i+1,y-1);
           	//input.splice(i,1);
            i--;
           }
      }
   		

}else if(input[i]==='{'){
   		for (var y =input.length -1 ; y >i; y--) {
   			//console.log(input[y]);
           if(input[y]==='}'){
   			//console.log("inside if ");

           	input=input.substr(i+1,y-1);
           	//input.splice(i,1);
            i--;
           }
      }
   		

}
//console.log(input);
   }

//console.log(input);

if(input.length >=1){
	return false;
}else{
	return true ;
}
    

 };









/* var balancedParens = function (input) {
   // write your code hre
   console.log(input);
   for (var i = 0; i < input.length; i++){
   //console.log(input[i]);
   	if(input[i]==='('){
   		for (var y =input.length -1 ; y >i; y--) {
   			//console.log(input[y]);
           if(input[y]===')'){
   			//console.log("inside if ");

           	input=input.substr(i+1,y-1);
           	//input.splice(i,1);
            i--;
           }
      }
   		

}
//console.log(input);
   }

//console.log(input);

if(input.length >=1){
	return false;
}else{
	return true ;
}
    

 };*/


