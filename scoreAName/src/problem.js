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

///
var bubbleSort = function(array) {
	for (var i=0;i<array.length;i++){
		for (var j=0;j<array.length;j++){
		   if (array[j]>array[j+1]){
		   	var temp=array[j];
		   	array[j]=array[j+1];
		   	array[j+1]=temp;
		   }
		}
	}
   return array;
};
/////

var totalNameScores = function(){
	var alphabet=[0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var sum=0;
	var nameScores=0;
	var contents=readFile();
	var words=bubbleSort(contents);
	for (var i=0;i<words.length;i++){
		for (var j=0;j<words[i].length;j++){
			sum = sum + (alphabet.indexOf(words[i][j]));
		}
          nameScores=nameScores+(sum*(i+1));
		  sum=0;
	}
    
  return nameScores;
}

module.exports = {totalNameScores};
