/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(){
  var number = Math.pow(2,1000);
  console.log(number);
  var arr = number.split('');
  var sum = 0;
  for(var i=0 ; i<arr.length ; i++){
  	sum = sum + arr[i];
  }
  return sum;
}
