/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(power){
	var result = 0
	var num = Math.pow(2, power)
	
	while(num !== 0){
		var temp = num % 10
		result += temp
		num = (num - temp) / 10
	}

	return result;
}
