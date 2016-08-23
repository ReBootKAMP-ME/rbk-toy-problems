/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
//1.0715086071862673e+301
*/

var powerOfTwo = function(num){
	var power=Math.pow(2,num);
	console.log(power)
	power=power.toString().split("").splice(power.indexOf("."),1)
	power=power.splice(power.indexOf("."),1)
	/*power=power.splice(power.indexOf("."),1);
	power=power.splice(power.indexOf("e+"),2)*/
	console.log(power)
  return 0;
}
