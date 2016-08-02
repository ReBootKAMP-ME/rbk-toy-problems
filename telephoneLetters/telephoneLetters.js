
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

var telephoneWords = function(fourDigits){
  var telephoneLetters = {
    0 : ['0'],
    1 : ['1'],
    2 : ['A', 'B', 'C'],
    3 : ['D', 'E', 'F'],
    4 : ['G', 'H', 'I'],
    5 : ['J', 'K', 'L'],
    6 : ['M', 'N', 'O'],
    7 : ['P', 'Q', 'R', 'S'],
    8 : ['T', 'U', 'V'],
    9 : ['W', 'X', 'Y', 'Z'],
  }

  var digits = fourDigits.split('')
  var results = []

  var generate = function(digitsArr, index){
    if(index === digitsArr.length){
      return results
    }

    var combo = ''
    for(var i = 0; i < telephoneLetters[digitsArr[index]].length; i++){
      if(index === 0){
        combo = telephoneLetters[digitsArr[0]][i] + telephoneLetters[digitsArr[1]][index] + telephoneLetters[digitsArr[2]][index] + telephoneLetters[digitsArr[3]][index]
        results.push(combo)
      } else if (index === 1){
        combo = telephoneLetters[digitsArr[0]][index] + telephoneLetters[digitsArr[1]][i] + telephoneLetters[digitsArr[2]][index] + telephoneLetters[digitsArr[3]][index]
        results.push(combo)
      } else if (index === 2){
        combo = telephoneLetters[digitsArr[0]][index] + telephoneLetters[digitsArr[1]][index] + telephoneLetters[digitsArr[2]][i] + telephoneLetters[digitsArr[3]][index]
        results.push(combo)
      } else if (index === 3){
        combo = (telephoneLetters[digitsArr[0]][index] || telephoneLetters[digitsArr[0]][index-1]) + (telephoneLetters[digitsArr[1]][index] || telephoneLetters[digitsArr[1]][index-1]) + (telephoneLetters[digitsArr[2]][index] || telephoneLetters[digitsArr[2]][index-1]) + telephoneLetters[digitsArr[3]][i]
        results.push(combo)
      }
    }
    index++
    return generate(digitsArr, index)
  }

  return generate(digits, 0)
}