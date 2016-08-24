/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(pow){
	var init = Math.pow(2, pow).toFixed();
	var arr = init.toString().split('');
	var result = 0;
	for (var i = 0; i < arr.length; i++){
		if(isNaN(arr[i])){
			arr[i]=0;
		}
		else{
			arr[i]=parseInt(arr[i])
			result=result+arr[i]
		}
	}

	return arr;
}
