/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  for(var i = 2; i < n; i++){
  	if(n % i === 0){
  		return false;
  	}
  }
  return true;
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
	var listOfPrime = [];
  	for(var i = start; i < end; i++){
  		if(primeTester(i)){
  			listOfPrime.push(i);
  		}
  	}
  	return listOfPrime;
};
var primeSieve = function(start, end) {
	var listOfPrime = [];
	for(var i = start; i <= 7; i++){
		if(i !== 4 && i !== 6 && i !== 0)
			listOfPrime.push(i);
			start = i;
	}
  	for(var i = start; i <= end; i++){
  		if(!(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0)){
  			listOfPrime.push(i);
  		}
  	}
  	return listOfPrime;
};
