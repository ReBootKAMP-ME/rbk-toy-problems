<<<<<<< HEAD
/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

	
var longestCollatzSeq = function(n){	
	var chain=[];
	var number=0;

	var getSeq=function (n) {
		
		if (n < 0 || n === 1){
			number= chain.length;
			return number;
		}
		if(n%2 === 0){
			n=n / 2;
			chain.push(n);
			getSeq(n)
		}else{
			n= 3 * n +1;
			chain.push(n);
			getSeq(n)
		}
	}
	getSeq(n)
	
	return number;
}

//// run this function to get the number
var doit=function (argument) {
	var max=0;
	var index=0;;
	for (var i = 1; i < 1000000; i++) {
		if(max < longestCollatzSeq(i)){
			max = longestCollatzSeq(i)
			index= i;
		}
	}
	console.log("for index : "+ index);
	return max;
}


//module.exports = longestCollatzSeq;
||||||| merged common ancestors
=======
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

var longestCollatzSeq = function(){
  return 0;
}


module.exports = longestCollatzSeq;
>>>>>>> c82d050b49940763f392638b639f2f3860e9efac
