
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
  function telephoneWords (phoneNumber){
    var arr = phoneNumber.split('');
    var letters=[['0'],['1'],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    var wordLetters=[];
    var result=[];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]==='0'){
        wordLetters.push('0')
      }
      if(arr[i]==='1'){
        wordLetters.push(letters[1])
      }
      if(arr[i]==='2'){
        wordLetters.push(letters[2])
      }
      if(arr[i]==='3'){
        wordLetters.push(letters[3])
      }
      if(arr[i]==='4'){
        wordLetters.push(letters[4])
      }
      if(arr[i]==='5'){
        wordLetters.push(letters[5])
      }
      if(arr[i]==='6'){
        wordLetters.push(letters[6])
      }
      if(arr[i]==='7'){
        wordLetters.push(letters[7])
      }
      if(arr[i]==='8'){
        wordLetters.push(letters[8])
      }
      if(arr[i]==='9'){
        wordLetters.push(letters[9])
      }
    }
    for (var i = 0; i < wordLetters.length; i++) {
        for (var j = 0; j < wordLetters[i].length; j++) {
          wordLetters[i][j]
        }
      }
    return wordLetters;
  }
