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
var sortNames = function (z) {
	var unsorted = readFile();
	var finalBucket = [];
	var sortit = function (word, position, bucket) {
		var valueOfChar = word.charCodeAt(position) - 65;
		if (!bucket[valueOfChar]) {
			bucket[valueOfChar] = {
				words: [],
				bucket: []
			};
		}
		if(!word[position+1]) {
			bucket[valueOfChar].words.push('"' + word + '"');
		} else {
			position++;
			sortit(word, position, bucket[valueOfChar].bucket);
		}
	};
	for (var i = 0; i < unsorted.length; i++) {
		unsorted[i] = unsorted[i].split('');
		unsorted[i].pop();
		unsorted[i].shift();
		unsorted[i] = unsorted[i].join('');
		sortit(unsorted[i], 0, finalBucket);
	}
	var sortedArray = []
	var merge = function (innerObject) {
		if (innerObject.words && (innerObject.words.length > 0)) {
			sortedArray = sortedArray.concat(innerObject.words);
		} 
		if (innerObject.bucket) {
			merge(innerObject.bucket)
		} else {
			for (var key in innerObject) {
				merge(innerObject[key]);
			}
		}
	};
	for (var i = 0; i < finalBucket.length; i++) {
		if (finalBucket[i]){
			merge(finalBucket[i]);
		}
	}
	return sortedArray;
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
