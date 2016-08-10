
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

/*
SOLUTION:
Here we will use the reduce function that reduces the array to a single value.
Note how much simpler this solution is versus using your favorite for-loops.
Make it a point to use higher order functions where possible. They reduce the complexity
of your solution and make it faster to read and easier to understand for fellow engineers
*/

var translateRomanNumeral = function(romanNumeral){
  //Check if romanNumeral is passed as a string
  if(typeof romanNumeral !== 'string'){return null;}

  //Let's split the string into an array of individual roman numerals
  var romanArray = romanNumeral.toUpperCase().split('');

  return romanArray.reduce(function(accumulator,element,index,array){
    //Let's check if we should add or subtract current value.
    //If current value is less than next value, subtract. Othewise, add.
    var curValue = DIGIT_VALUES[array[index]]<DIGIT_VALUES[array[index+1]] ? -DIGIT_VALUES[array[index]] : +DIGIT_VALUES[array[index]];
    return accumulator + curValue;
  },0);
};

console.log(translateRomanNumeral('IV'))
