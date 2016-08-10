
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


var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
	var numarals = romanNumeral.split('')
	var result = 0;
	var temp;

	for(var i = 0; i < numarals.length; i++){
		
		if(DIGIT_VALUES[numarals[i]] < DIGIT_VALUES[numarals[i+1]]){
			temp = -DIGIT_VALUES[numarals[i]]
		} else if (DIGIT_VALUES[numarals[i]] && DIGIT_VALUES[numarals[i+1]] < DIGIT_VALUES[numarals[i+2]]){
			return null
		} else {
			temp = DIGIT_VALUES[numarals[i]]
		}

		result += temp
	}

	return result
};
