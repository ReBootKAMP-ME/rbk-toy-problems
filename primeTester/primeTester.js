/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199
 */

var primeTester = function(n) {
  var flag=true;
  for (var i = 2; i < n-1; i++) {
  	if( n%i ===0 )
		flag=false;
  }
  return flag;
};

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

// First way
var primeRang = function(start, end) {
  for (var i = start; i <= end; i++) {
  	if(primeTester(i))
  		console.log(i);
  }
};

// Secound way
var primeSieve = function(start, end) {
	var A=[];
	for(i=2 ; i<= end ; i++ ){
		A[i]=true;
	}

	for( i=2 ; i<= end ; i++ ){
		if(A[i]){
			for( j=i+i ; j<=end ; j=j+i){
				A[j]=false;
			}
		}
	}

	for (var i = start; i < A.length; i++) {
		if(A[i])
			console.log(i);
	}
};
