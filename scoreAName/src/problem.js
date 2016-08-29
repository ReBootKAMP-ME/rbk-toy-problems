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
fs = require('fs');

var readFile = function (){
  var contents = fs.readFileSync("./names.txt").toString();
  return contents.split(",");
}

// var source = {
// 	A: 1,
// 	B: 2,
// 	C: 3,
// 	D: 4,
// 	E: 5,
// 	F: 6,
// 	G: 7,
// 	H: 8,
// 	I: 9,
// 	J: 10,
// 	L: 11,
// 	M: 12,
// 	N: 13,
// 	O: 14,
// 	P: 15,
// 	Q: 16,
// 	R: 17,
// 	S: 18,
// 	T: 19,
// 	U: 20,
// 	V: 21,
// 	W: 22,
// 	X: 23,
// 	Z: 24
// }

var totalNameScores = function(){
  var letter = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]	
  var arr = readFile();
  var result = 0;
  for(var i=1 ; i<=arr.length-1; i++){
  	var temp = arr[i].split("");
  	var sum = 0;
  	for(var x=1 ; x<temp.length-1 ; x++){
  		var index= letter.indexOf(temp[x])
  		var sum = sum + index;
  	}
  	sum = sum * i;
  	result = result + sum;
  }
  return result;
}

module.exports = {totalNameScores};
