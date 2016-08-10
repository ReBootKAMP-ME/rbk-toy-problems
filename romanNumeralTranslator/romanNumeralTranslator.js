
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
	var arrayResult=[];
	var sum=0;
	var arrayRoman=["I","V","X","L","C","D","M"];
	var arrayValue=[1,5,10,50,100,500,1000];
	for(var i=0;i<romanNumeral.length;i++){
		if(arrayRoman.indexOf(romanNumeral[i])===-1){
			return null;
		}
		for(var j=0;j<arrayRoman.length;j++){
			if(romanNumeral[i]===arrayRoman[j]){
				arrayResult.push(arrayValue[j]);
			}
		}
	}
	for(var k=0;k<arrayResult.length;k++){
		if(arrayResult[k+1]!==undefined && arrayResult[k]<arrayResult[k+1]){
			sum=sum-arrayResult[k];
		}else{
			sum=sum+arrayResult[k];
		}
	}
	return sum;
};
