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
	var arrayOfseq = [];
	for (var j = 999999; j>1; j--){
		var i=j;
		var arr = [];
		while (i>0 && i!==1){
			
			arr.push(i);
			if(i%2===0){
				i=i/2;
				arr.push(i)
			}else{
				i=3*i+1;
				arr.push(i)
			}
		}
		arrayOfseq.push(arr);
	}
	var longestSeq = arrayOfseq[0];
	for (var i = 0; i < arrayOfseq.length; i++) {
		if(arrayOfseq[i].length>longestSeq.length){
			longestSeq=arrayOfseq[i];
		}
	}
	return longestSeq[0];
}


module.exports = longestCollatzSeq;
