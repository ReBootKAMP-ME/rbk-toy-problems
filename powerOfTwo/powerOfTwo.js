/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(){
	var value=Math.pow(2,1000);
	var ar=value.toString().split('');
	var results=0;
	for (var i = 0; i < ar.length; i++) {
		if(ar[i] !== 'e' || ar[i] !== '.' || ar[i] !== '+'){
			var value=parseInt(ar[i]);
			results+= value;
		}
	}
  	return results;
}
