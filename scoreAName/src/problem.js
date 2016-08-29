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

var readFile = function (){
  var contents = fs.readFileSync("./names.txt").toString();
  return contents.split(",");
}

var totalNameScores = function(){
	var contents = readFile();
	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var sorted = contents.sort();
	var worth = [];
	var total = 0;
	for (var i = 0; i < contents.length; i++) {
		var sum = 0;
		for (var j = 0; j < contents[i].length; j++) {
			sum = sum + alphabet.indexOf((contents[i][j]))+1;
		}
		worth.push(sum * i);
	}
	for (var i = 0; i < worth.length; i++) {
		total = total + worth[i];
	}
  return total;
}

module.exports = {totalNameScores};


//870,873,746 to be 6,837,803,474.

// var contents = ["AAAA"]

// var totalNameScores = function(){
// 	var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// 	var sorted = contents.sort();
// 	console.log(sorted);
// 	var worth = [];
// 	var total = 0;
// 	for (var i = 0; i < contents.length; i++) {
// 		var sum = 0;
// 		for (var j = 0; j < contents[i].length; j++) {
// 			sum = sum + alphabet.indexOf((contents[i][j]) + 1);
// 			console.log(sum);
// 		}
// 		worth.push(sum + i);
// 	}
// 	for (var i = 0; i < worth.length; i++) {
// 		total = total + worth[i];
// 	}
//   console.log(worth);
//   return total;
// }
