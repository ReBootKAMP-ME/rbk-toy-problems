/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(n === 2 || n === 3 || n=== 5|| n=== 7 || n===11){
  	return true;
  }
  if( n%2 === 0 || n%3 === 0 || n%5 === 0 || n%7=== 0 || n%11===0){
  	return false
  }
  return true

};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

// this is the smple way it work for 1 million but at 10 million it take 2 secand
var primeSieve = function(start, end) { 
  var thePrime=[];
  for (var i = start; i < end; i++) {
  	if(primeTester(i)){
  		thePrime.push(i);
  	}
  }
  return thePrime;
};
