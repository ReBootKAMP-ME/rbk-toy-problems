/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/
// 
var longestCollatzSeq = function(){

	var countNumberOfChains = function(number, term){
	  if(number === 1 || 0){
	  	return term || 1;
	  }
	  term = term || 1;
	  if(number % 2 === 0){
	  	number/=2;
	  } else {
	  	number = 3 * number + 1;
	  }
	  term++;
	  return countNumberOfChains(number, term);
	}
	var longestNumber = 0;
	var longestChain = 0;
	for(var i = 1; i < 1000000 ; i++){
	  var temp = countNumberOfChains(i);
	  if(longestChain < temp){
	  	longestChain = temp;
	  	longestNumber = i;
	  }
	}
	return "The longest number is " + longestNumber + " with the longest Chain " + longestChain;
}




module.exports = longestCollatzSeq;
