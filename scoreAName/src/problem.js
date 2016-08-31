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

var sortFun = function(array){

}

var getScore = function(index, string){
	var value = 0

	for(var i = 1; i < string.length - 1; i++){
		value += string.charCodeAt(i) - 64
	}

	return value * index
}

var totalNameScores = function(){
	var sorted = readFile().sort()
	var total = 0;

	for(var i = 0; i < sorted.length; i++){
		total += getScore(i+1, sorted[i])
	}

	return total;
}

module.exports = {totalNameScores};
