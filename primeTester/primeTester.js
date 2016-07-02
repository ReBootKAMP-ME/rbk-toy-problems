/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
	
if(n === 1) { 
return false } ; 
if(n === 2) 
{ return false ;}
	for(var x=2 ; x<n ; x++) { 

		if(n%x === 0) { 
			return false ;

		}}
	
return true ; 



};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
	var arr=[] ;

	for(var x = start ; x<end ;x++ ) { 

		if(primeTester(x)=== true) 
			arr.push(x) ;}
	return arr;  // to do
  // to do
};
