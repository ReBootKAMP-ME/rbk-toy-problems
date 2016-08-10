
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
	//invalid input
	if(typeof(romanNumeral)!=='string'){
		return null;
	}
	for (var i = 0; i < romanNumeral.length; i++) {
 		if (!(romanNumeral[i] in DIGIT_VALUES)) {
    	  return null;
   		 }
    }
    if(romanNumeral.length<=1){
    	return DIGIT_VALUES[romanNumeral[0]];
    }else{
    	var num=0
    	for (var j = 0; j < romanNumeral.length; j++) {
    		for (var key in DIGIT_VALUES){
				if(romanNumeral[j]===key){
					 num+= DIGIT_VALUES[key];
    				}
    			}
    		}
    	}
    return num;
};

  
