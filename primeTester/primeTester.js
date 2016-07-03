/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  // to do
  var counter=0;
  for(var i=2;i<n;i++){
  	if(n%i===0){
  		counter++;
  	}
  }
  if(counter>0){
  	return true;
  }else{
  	return false;
  }
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
  // to do
  var counter=0;
  var arrayPrime=[];
  for(var i=start ; i<=end ; i++){
  	counter=0;
  	for(var j=2;j<i;j++){
  		if(i % j === 0){
  			counter++;
  		}
  	}
  	if(counter===0){
  		arrayPrime.push(i);
  	}
  }
  return arrayPrime;
};
