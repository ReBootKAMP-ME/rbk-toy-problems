/*
Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. 
Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

If you can try and sort the words with your own sort algorithm.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. 
The letters get their score from their position in the alphabet. For instance C is 3 because it is the third letter.
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

To run the tests run npm install and npm test.
*/
var fs = require('fs');
var letters = { 'A' : 1 ,'B' : 2 ,'C' : 3,'D' : 4,'E' : 5,	'F' : 6 ,	'G' : 7 ,	'H' : 8 ,	'I' : 9 ,	'J' : 10 ,	'K'	: 11,	'L'	: 12,	'M'	: 13,	'N' : 14 ,	'O' : 15 ,	'P'	: 16 ,	'Q' : 17 ,	'R'	: 18 ,	'S' : 19 ,	'T' : 20 ,	'U' : 21 ,	'V' : 22 ,	'W' : 23 ,	'X' : 24 ,	'Y' : 25 ,	'Z' : 26  	 }

var readFile = function (){
  var contents = fs.readFileSync("./names.txt").toString();
  return contents.split(",");
}

var totalNameScores = function(){
  return sortThem();
}
var sortThem = function(){
	var sorted = readFile().sort();
	var total = 0;
	for(var i = 0 ; i < sorted.length; i++){
		sorted[i] = sorted[i].split('"').join('');
		var thisNumber = 0;		
		for(var j = 0; j < sorted[i].length; j++){
			thisNumber+=letters[sorted[i][j]];
		}
		// console.log(5163* 666710);
		total += (sorted.indexOf(sorted[i]) + 1) * thisNumber;
	}	
    return total;
}
// 3,442,223,730

sortThem();
module.exports = {totalNameScores};
