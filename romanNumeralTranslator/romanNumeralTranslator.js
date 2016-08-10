
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
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var translateRomanNumeral = function(romanNumeral){
	var result = 0;
	var keys = Object.keys(DIGIT_VALUES)
	for (var i = 0; i < romanNumeral.length; i++) {
		if(keys.indexOf(romanNumeral[i])===-1){
			return null;
		}
		romanNumeral[i] = DIGIT_VALUES[romanNumeral[i]]
		console.log(romanNumeral[i])
		console.log(DIGIT_VALUES[romanNumeral[i]])
		if(romanNumeral.length-1 !== romanNumeral[i])
		if(romanNumeral[i] > romanNumeral[i+1]){
			result+=romanNumeral[i]
		}else{
			result-=romanNumeral
		}
	}
	return result;
};
