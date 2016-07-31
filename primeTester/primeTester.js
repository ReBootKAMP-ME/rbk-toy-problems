/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(n < 1)
  return false;
else{
	if(n===2 || n===3 || n===5)
  		return true;
  	else if(n%2 !==0 && n%3!==0 && n%5!==0)
  		return true;
}
return false;
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
	var result=[];
	if(start>end)
		return false;
  for(var i=start ; i<=end ; i++){
  	if(i===2 || i===3 || i===5)
  		result.push(i);
  	else if(i%2 !==0 && i%3!==0 && i%5!==0)
  		result.push(i)
  }
  return result;
};
