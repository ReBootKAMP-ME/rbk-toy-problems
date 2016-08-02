
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

var getRandom=function (arrayLength) {
  return Math.floor(Math.random() * arrayLength.length);
}

var telephoneWords=function (string) {
  var TelePad={
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z'],
    0:[" "]
  }

  var word="";
  var words=[];
  var numbers=string.split("");
  
  for (var i = 0; i < numbers.length; i++) {
      for(var letter in TelePad){ 
        if (letter === numbers[i]){
          getRandom(TelePad[letter]);
          word+= TelePad[letter][getRandom(TelePad[letter])]
          if(word.length > 3 ){
            if(words.indexOf(word) > 0){
              words.push(word);
            } 
            word="";
          } 
        }    
      }
    }
    return words 
}

    // for (var num in TelePad){
    //   if (numbers[i] === num){
    //     for(var l in TelePad[num] ){
    //       word+=l;
    //       if(word.length>3){
    //         words.push(word);
    //         word="";
    //       }
    //     }
    //   }












