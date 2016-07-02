/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  // to do
  if(n===1){
  	return false
  }

  for (var i = 2; i < n; i++) {
  	if(n%i===0){
  		return false
  	}
  }
  return true
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
  // to do
  var result=[];
  for (var i = start; i <= end; i++) {
  	if(primeTester(i)===true){
  		result.push(i);
  	}
  }
  return result.toString();
};
/*
var primeSieveA = function(start, end) {
  // to do
  var a=[];
  var result=[];
  for (var i = start; i <= end; i++) {
  	a.push(true);
  }
  for (var i = 2; i < Math.pow(a.length,0.5); i++) {
  	if(a[i]===true){
  		for (var j=Math.pow(i,2); j < a.length; j++) {
  			if(){
  				a[j]===false;
  			}
  			result.push(i);
  		}
  	}
  }
  return result.toString();;
};
*/