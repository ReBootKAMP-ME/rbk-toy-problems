
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

//'IV' => ['I','V']
var translateRomanNumeral = function(romanNumeral){
var romanArray = romanNumeral.split('');
var numberArray = [];
var result=0;
for (var i = 0; i < romanArray.length; i++) {
	for (var key in DIGIT_VALUES){
		//console.log(DIGIT_VALUES[key])
		if (romanArray[i] === key){
			numberArray.push(DIGIT_VALUES[key])
		} 
	}
}
console.log(numberArray)
if (numberArray.length === 1){return numberArray[0]}
for (var i = 0; i < numberArray.length; i++) {
	if (numberArray[i+1] === undefined){
		//result = numberArray[i];
		return result;
	} else if (numberArray[i]>=numberArray[i+1]){
			result = result + (numberArray[i]+numberArray[i+1])
		} else {
			result= result +(numberArray[i+1]-numberArray[i])
		} 
		}
	
return numberArray;
return result;
};



