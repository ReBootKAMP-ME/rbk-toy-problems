/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  // to do
  for (var i = 2; i < n; i++) {
  	if(n % i === 0 )
  		return false
}
	return true
}

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */


var primeSieve = function(start, end) {
  // to do
  var results=[];
  for (var i = start; i <= end ;i++) {
  	if(primeTester(i))
  		results.push(i);
  }
  return results;
};
//solving according to Seive
var primeSieve= function(end){
	var array=[];
	var results=[];
	for (var i = 0; i < end; i++) {
		array[i]=true;
	}
	for (var i = 2; i < array.length; i++) {
		if(array[i]=== true){
			for (var j = Math.pow(i,2); j < array.length; j++) {
				if( j % i === 0)
					array[j]=false;
			}
		}
	}
	for (var i = 1; i < array.length; i++) {
		if(array[i]=== true)
			results.push(i);
	}

	return results;
}