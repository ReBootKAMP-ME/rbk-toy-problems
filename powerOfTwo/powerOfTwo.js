/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(){
	var num = Math.pow(2,1000);
	var str = num.toSring();
	var result = 0;
	for (var i = 0; i < str.length; i++) {
		result += Number(str[i]);
	}
  	return result;
}
