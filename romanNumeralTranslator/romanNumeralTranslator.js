
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
	var number = romanNumeral.split('');
	var result = 0;
	if(number.lenght === 1)
		result = result + DIGIT_VALUES[number[0]];
	for(var i=0 ; i<number.length ; i=i+2){
		if(DIGIT_VALUES[number[i]]< DIGIT_VALUES[number[i+1]]){
			result = result + DIGIT_VALUES[number[i+1]] - DIGIT_VALUES[number[i]];
		}else{
			result = result + DIGIT_VALUES[number[i]] + DIGIT_VALUES[number[i+1]]; 
		}
	}
	return result;
};
