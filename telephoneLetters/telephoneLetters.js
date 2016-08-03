
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
  var telephoneWords=function(num){
    var arr=[[0],[1],['a','d','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','v','u'],['w','x','y','z']]
    var collofstr=[]
    console.log("eeeeeeee")
    var first=Number(num[0]);
    var second=Number(num[1]);
    var third=Number(num[2]);
    var fourth=Number(num[3]);
    console.log("edrfghjkl;",first)
    for (var i = 0; i <arr[first].length ; i++) {
      var str= arr[first][i]
      for (var y = 0; y < arr[second].length; y++) {
        str=str+arr[second][y]
        for (var x = 0; x < third.length; x++) {
          str=str+arr[third][x]
          for (var e = 0; e < fourth.length; e++) {
            str=str+arr[fourth][e];
            collofstr.push(str)
            //str=" "
          }
        }

        
      }
    }
   return collofstr;
  }

  /*var telephoneWords=function(num){
    var arr=[[],[],['a','d','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','v','u'],['w','x','y','z']]
    var collofstr=[]
    for (var i = 0; i < num.length; i++) {
      var str
      if (num[i] !== 1 || num[i] !== 0){
        str=str+num[i]
      }else{
        for (var i = 0; i <arr[Number(num[i])].length; i++) {
          str=str+arr[Number(num[i])][i]
        }
        collofstr.push(str)
      }
    }
   return str;
  }*/