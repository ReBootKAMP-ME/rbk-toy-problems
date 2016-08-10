
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
  var number=0;
  var rn=romanNumeral;
  var array=[];
  var b=false;
  for (var i=0;i<rn.length;i++){
  	for (var key in DIGIT_VALUES){
  		if(rn[i]===key){
  			array.push(DIGIT_VALUES[key])

  		}
  	}
  }
  for (var i=0;i<array.length;i++){
  	if (array[i]>=array[i+1]){
  		number=number+array[i];
  		b=true;

  	}
  	else if (array[i]<array[i+1]){
  		console.log(number)
  		number=number+(array[i+1]-array[i]);
  	}
  }
  if (b){
  number=number+array[array.length-1];
  	
  }
  console.log (array);
  return number;
};
