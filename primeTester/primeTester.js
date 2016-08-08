/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  
  for(var i = 2; i < n; i++){
  	if(n % i === 0){
  		return false
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
  var array = []
  for(var i = start; i <= end; i++){
	  if(primeTester(i)){
	  	array.push(i)
	  }
  }
  return array
};

var primeSieveEra = function(start, end) {
	var list = []
	for(var i = 2; i <= end; i++){
		list.push(true)
	}
	for(var j = 2; j <= Math.sqrt(end); j++){
		if(list[j]){
			for(var k = j*j; k <= end; k+=j){
				list[k] = false
			}
		}
	}
	var array = []
	for(var n = start; n <= end; n++){
		if(list[n]){
			array.push(n)
		}
	}
	return array
}

