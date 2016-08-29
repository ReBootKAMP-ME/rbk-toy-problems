
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
 

  var telephoneWords = function(string) {
  	var result = [];
  	var words = [['A','B','C'],
  				 ['D','E','F'],
  				 ['G','E','F'],
  				 ['J','K','L'],
  				 ['M','N','O'],
  				 ['P','Q','R','S'],
  				 ['T','U','V'],
  				 ['W','X','Y','Z']
  	];
  	var numbers = string.split('');
  	for(var i=0 ; i<numbers.length ; i++){
  		var temp1 = words[numbers[i]];
  		for(var x=0 ; x<temp1.lenght; x++){
  			var letter = [];
  			if(temp1[x] ==='0' || temp1[x] === '1')
  				letter = temp1[x];
  			else{
  				var temp2 = words[numbers[i]+1];
  				for(var t=0 ; t<temp2.length ; t++)
  					if(temp2[t] ==='0' || temp2[t] === '1')
  					letter.push(temp2[t]);
  					else{
  						var temp3 = words[numbers[i]+2];
  						for(var e=0 ; e<temp3.length ; e++){
  							if(temp3[t] ==='0' || temp3[t] === '1')
  							letter = letter + temp3[t];
  						else{
  							letter.push(temp3[e]); 
  						}
  						}
  						result.push(letter);
  					}	
  			}

  		}
  	}
  	return result;
  }

