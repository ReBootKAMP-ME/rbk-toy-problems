
/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

	// var num2 = ["A","B","C"];
	// var num3 = ["D","E","F"];
	// var num4 = ["G","H","I"];
	// var num5 = ["J","K","L"];
	// var num6 = ["M","N","O"];
	// var num7 = ["P","Q","R","S"];
	// var num8 = ["T","U","V"];
	// var num9 = ["W","X","Y","Z"];

var keypad = ["0","1",["A","B","C"],["D","E","F"],["G","H","I"],["J","K","L"],
			 ["M","N","O"],["P","Q","R","S"],["T","U","V"],["W","X","Y","Z"]];

var telephoneWords = function (digits){
	var result = [];
	digits = digits.toString().split("");
		var num1 = keypad[digits[0]];
		var num2 = keypad[digits[1]];
		var num3 = keypad[digits[2]];
		var num4 = keypad[digits[3]];
		for (var i = 0; i < num1.length; i++) {
			for (var j = 0; j < num2.length; j++) {
				for (var k = 0; k < num3.length; k++) {
					for (var l = 0; l < num4.length; l++) {
						var word = num1[i]+num2[j]+num3[k]+num4[l];
						result.push(word);
					}
				}
			}
		}


	return result;
}