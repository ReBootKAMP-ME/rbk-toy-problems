
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

  // 0 and 1 return 0 and 1 only
  // 

var telephoneWords = function(numbers){
  var zero =   ['0']
  var first =  ['1']
  var second = ['a','b','c']
  var third=   ['d','e','f']
  var fourth=  ['g','h','i']
  var fifth =  ['j','k','l']
  var sixth =  ['m','n','o']
  var seventh= ['p','q','r', 's']
  var eightth= ['t','u','v']
  var ninth =  ['w','x','y', 'z']
  
  var combination = [];
  
// if the number is 0 or 1 add to the cobination 0 and 1
// if the number is 2 add to the combination the values of the for loop on the second array
// if the number is 3 add to the combination the valeus of the for loop ib the third array
// and so on to the ninth array
// each time check the combination member if it is undefined so there is no combination on it 
  for (var i = 0; i < numbers.length; i++) {
    
    if (numbers[i] == 0){
      if (combination[i] === 'undefined') {
        combination.push('0');
      } else{
      combination[i]+= '0';
      }
      //combination.push(0);
    } else if (numbers[i] == 1) {
      if (combination[i] === 'undefined') {
        combination.push('1');
      } else{
      combination[i]+= '1';
      }
      
    } else if (numbers[i] == 2) {
      for (var j = 0; j < second.length; j++) {
        if (combination[i] === 'undefined'){
          combination[i] = second[j];  
        } else {
          combination[i]+= second[j]
        } 
      }
    } else if (numbers[i] == 3){
      for (var k = 0; k < third.length; k++) {
        if (combination[i] === 'undefined'){
          combination[i] = third[k];
        } else {
          combination[i] += third[k]
      }
    } else if (numbers[i] == 4) {
      for (var l = 0; l < fourth.length; l++) {
        if (combination[i] === "undefined") {
          combination[i] = fourth[l];
        } else {
          combination[i]+= fourth[l]
      }
    }

  }
  return combination
}





















