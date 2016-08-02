
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


// Tried to make a recursive instead of many for looops
// Ended up with it returning only the first choice ['APGJ']
// my recursion is messed up , will work on it!

var numbers = [ ' ' , ' ' , ['A', 'B', 'C'] , ['D', 'E', 'F'] , ['G', 'H', 'I'] ,
                ['J', 'K', 'L']  , ['M', 'N', 'O'] , ['P', 'Q', 'R' , 'S'] , 
                ['T', 'U', 'V'] , ['W', 'X', 'Y' , 'Z']]


var telephoneWords = function(digits){
  var array = [];
  digits = digits.toString().split('');
  for(var i = 0 ; i < digits.length; i++){
    array.push(numbers[digits[i]]);
  }  
  console.log(array[0].length)
  // now we have an array that holds all the letters we are willing to make words from .
  var resultArray = [];
  var findWords = function(innerArray , value){
    if(innerArray.length === digits.length){
      
      resultArray.push(innerArray.join(''));
      return value = 0;
    }
    for(var i = value ; i < array.length; i++){
      for(var j = 0 ; j < array[i].length; j++){
        return findWords(innerArray.concat(array[i][j]) , value+1);
      }
    }
  }
  findWords([], 0);
  return resultArray;
}


















