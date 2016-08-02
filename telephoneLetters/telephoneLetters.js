
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

  var telephoneWords=function(str){
  	var numbers={
  		0:'',
  		1:'',
  		2:['a','b','c'],
  		3:['d','e','f'],
  		4:['g','h','i'],
  		5:['j','k','l'],
  		6:['m','n','o'],
  		7:['p','q','r','s'],
  		8:['t','u','v'],
  		9:['w','x','y','z']
  	}
  	var results=[];
  	var telpone=str.split("");
  	if(telpone.indexOf(0) !== -1 || telpone.indexOf(1) !== -1){
  		telpone.splice(telpone.indexOf(0),1);
  		telpone.splice(telpone.indexOf(1),1);
  	}

  	for (var i = 0; i < telpone.length; i++) {
  		for(var j=0 ; j < numbers[telpone[i]].length ; j++){
  			for (var k = 0; k < numbers[telpone[j]].length; k++) {
  				for (var f = 0; f < numbers[telpone[k]].length; f++) {
  		 			results.push(numbers[telponep[i][k]]+numbers[telpone[j][k]]+numbers[telpone[k][k]]+numbers[telponep[f][k]]);
  				}
  			}
  		}	
  	}
  	return results;
  }
