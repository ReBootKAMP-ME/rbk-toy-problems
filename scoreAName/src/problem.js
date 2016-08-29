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

var readFile = function () {
  var contents = fs.readFileSync("./names.txt").toString();
  return contents.split(",");
};
var sortNames = function () {
	//
	// var unsorted = readFile();
	// var topLevelArr = [];
	// var finalArr = [];
	// var sort = function (word, position, currLevelArr) {
	// 	var valueOfCharAtPosition = (word.charCodeAt(position) - 64);
	// 	if (!Array.isArray(currLevelArr[valueOfCharAtPosition])) {
	// 		if (!currLevelArr[valueOfCharAtPosition]) {
	// 			currLevelArr[valueOfCharAtPosition] = [];
	// 		}
	// 	}
	// 	if (!word[position + 1]) {
	// 		currLevelArr[valueOfCharAtPosition].push(word);
	// 	} else {
	// 		position++;
	// 		sort (word, position, currLevelArr[valueOfCharAtPosition])
	// 	}
	// }
	// for (var i = 0; i < unsorted.length; i++) {
	// 	unsorted[i] = unsorted[i].split('')
	// 	unsorted[i].pop();
	// 	unsorted[i].shift();
	// 	unsorted[i] = unsorted[i].join();
	// 	sort(unsorted[i], 0, topLevelArr)
	// }
	// var concatArr = function (arr) {
	// 	for (var i = 0; i < arr.length; i++) {
	// 		if (Array.isArray(arr[i])) {
	// 			arr.concat(concatArr(arr[i]))
	// 		}
	// 	}
	// 	return arr;
	// };
	// concatArr(topLevelArr);
	// return topLevelArr
};
var totalNameScores = function() {
	var sortedArr = readFile().sort();
	var total = 0;
	var wordValue;
	for (var i = 0; i < sortedArr.length; i++) {
		wordValue = 0;
		for (var j = 0; j < sortedArr[i].length; j++) {
			wordValue += sortedArr[i].charCodeAt(j);
		}
		total += (wordValue * (i+1));
	}
	return total;
}
module.exports = {totalNameScores};
