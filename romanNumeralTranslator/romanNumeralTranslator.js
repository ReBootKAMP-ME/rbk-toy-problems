
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
	var value=0
	for (var i = 0; i < romanNumeral.length; i++) {
		if(romanNumeral[i]== 'I'||romanNumeral[i]=='V'||romanNumeral[i]=='X' || romanNumeral[i]=='L' ||romanNumeral[i]=='C'||romanNumeral[i]=='D'){
           if(DIGIT_VALUES[romanNumeral[i]]>DIGIT_VALUES[romanNumeral[i-1]]){
           		value=value+DIGIT_VALUES[romanNumeral[i]]- DIGIT_VALUES[romanNumeral[i-1]]- DIGIT_VALUES[romanNumeral[i-1]];
           	}
           else{
           	value=value+DIGIT_VALUES[romanNumeral[i]]
           }
		}else{
			value=null
		}
	}
	return value;

};
