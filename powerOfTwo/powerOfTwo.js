/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(n, power){
  var finalResult = 0;
  var powerResult = Math.pow(n, power);
  console.log(powerResult);
  var arr = (JSON.stringify(powerResult)).split("");
  for (var i = 0; i < arr.length; i++) {
  	if (arr[i] !== '.' && arr[i] !== 'e' && arr[i] !== '+')
  		finalResult += JSON.parse(arr[i]);
  }
  return finalResult;
}
