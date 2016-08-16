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
var CollatzSeq=function(startNumber){
	var array=[];
	array.push(startNumber);
    while(startNumber!==1){
    	if (startNumber%2===0){
    		startNumber=startNumber/2;
    		array.push(startNumber);
    	}
    	else if (startNumber%2!==0){
    		startNumber=3*startNumber+1;
    		array.push(startNumber);
         }
    }
    //console.log(array) ;
    return array.length;

}


var longestCollatzSeq = function(){
	var n=1000000;
	var max=0;
	for (var i=1;i<=n;i++){
		var chainLength=CollatzSeq(i);
        if (chainLength>max){
        	var number=i;
        	max=chainLength;

        }

	}
	console.log(max);

  return number;
}


module.exports = longestCollatzSeq;
