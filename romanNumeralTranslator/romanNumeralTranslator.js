
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){
	var result = 0;
	var arr = [];
	for (var i = 0; i < romanNumeral.length; i++) {
		if(romanNumeral.charAt(i)=== 'I' ){
			arr.push(1)
		}
		if(romanNumeral.charAt(i)=== 'V'){
			arr.push(5)
		}
		if(romanNumeral.charAt(i)=== 'X'){
			arr.push(10)
		}
		if(romanNumeral.charAt(i)=== 'L'){
			arr.push(50)
		}
		if(romanNumeral.charAt(i)=== 'C'){
			arr.push(100)
		}
		if(romanNumeral.charAt(i)=== 'D'){
			arr.push(500)
		}
		if(romanNumeral.charAt(i)=== 'M'){
			arr.push(1000)
		}
	}
	for (var j = 0; j < arr.length; j++) {
		if(arr[j]<arr[j+1]){
			console.log(arr)
			result=result-arr[j] 
		}
		else{
			result=result+arr[j]
		}
	}
	return result;
};
