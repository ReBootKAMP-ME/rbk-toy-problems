/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  // to do
  re=true;
if(n === 2)
	return true
	else{
	  for (var i = 2; i <n; i++) {
	  	if(n%i === 0)
	  		re= false
	  }
  }
  return re;
};


//Another solution 
var primeTester2 = function(n) {
	if(n ===2 || n===3 || n=== 5 || n===7)
		return true;
	else {
		if(n%2===0 || n%3 === 0 || n%5 ===0 || n%7 ===0)
			return false
	}
	return true;
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
	var results = [];
  for (var i = start; i <= end; i++) {
  	if(primeTester2(i))
  		results.push(i)
  }
  return results;
};
