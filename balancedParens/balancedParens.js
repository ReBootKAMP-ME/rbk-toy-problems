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
 // function sumElement (arr){
 // 	var sum=0;
 //   for (var i=0;i<arr.length;i++){
 //       sum=sum+arr[i];
 //   }
 //   return sum;
 // }
 // var balancedParens = function (input) {
 //   // write your code hre
 //   var  obj={};
 //   var arrayOfIndex=[];
 //   var array2=[];
 //   for (var i=0; i<input.length;i++){
 //   	 if(input[i]==="("){
 //   	 	arrayOfIndex.push(i);
 //   	 	obj["("]=arrayOfIndex;
 //   	 }
 //   	 if (input[i]===")"){
 //   	 	array2.push(i);
 //   	 	obj[")"]=array2;
 //   	 }
 //   }
 //   if (arrayOfIndex.length!==array2.length){
 //   	 return false;
 //   }
 //   else{
 //      if(sumElement(arrayOfIndex)<sumElement(array2))
 //      	return true;
 //      else
 //      	return false;
       
 //   }
 //  // return obj;
 // };


 ////////   this try to solve another bruckets
 function sumElement (arr){
 	var sum=0;
   for (var i=0;i<arr.length;i++){
       sum=sum+arr[i];
   }
   return sum;
 }
 var balancedParensHelper = function (input,p1,p2) {
   // write your code hre
   var  obj={};
   var arrayOfIndex=[];
   var array2=[];
   for (var i=0; i<input.length;i++){
   	 if(input[i]===p1){
   	 	arrayOfIndex.push(i);
   	 	obj[p1]=arrayOfIndex;
   	 }
   	 if (input[i]===p2){
   	 	array2.push(i);
   	 	obj[p2]=array2;
   	 }
   }
   if (arrayOfIndex.length!==array2.length){
   	 return false;
   }
   else{
      if(sumElement(arrayOfIndex)<sumElement(array2))
      	return true;
      else
      	return false;
       
   }
  // return obj;
 };

var balancedParens=function(input){
	if (balancedParensHelper(input,"(",")") || balancedParensHelper(input,"{","}") || balancedParensHelper(input,"[","]"))
		return true ;
	else 
		return false;
}