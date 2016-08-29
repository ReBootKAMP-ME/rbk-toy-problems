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

var alphabet= {
		A: 1,
		B: 2,
		C: 3,
		D: 4,
		E: 5,
		F: 6,
		G: 7,
		H: 8,
		I: 9,
		J: 10,
		K: 11,
		L: 12,
		M: 13,
		N: 14,
		O: 15,
		B: 16,
		Q: 17,
		R: 18,
		S: 19,
		T: 20,
		U: 21,
		V: 22,
		W: 23,
		X: 24,
		Y: 25,
		Z: 26
	};

var readFile = function (){
  var contents = fs.readFileSync("./names.txt").toString();
  return contents.split(",");
}

var checkLetter=function(word,index){
	console.log(word[index])
	if(word[index] === 'A'){
		return 'A';
	}else if(word[index] === 'B'){
		return 'B';
	}else if(word[index] === 'C'){
		return 'C';
	}else if(word[index] === 'D'){
		return 'D';
	}else if(word[index] === 'E'){
		return 'E';
	}else if(word[index] === 'F'){
		return 'F';
	}else if(word[index] === 'G'){
		return 'G';
	}else if(word[index] === 'H'){
		return 'H';
	}else if(word[index] === 'I'){
		return 'I';
	}else if(word[index] === 'J'){
		return 'J';
	}else if(word[index] === 'K'){
		return 'K';
	}else if(word[index] === 'L'){
		return 'L';
	}else if(word[index] === 'M'){
		return 'M';
	}else if(word[index] === 'N'){
		return 'N';
	}else if(word[index] === 'O'){
		return 'O';
	}else if(word[index] === 'P'){
		return 'P';
	}else if(word[index] === 'Q'){
		return 'Q';
	}else if(word[index] === 'R'){
		return 'R';
	}else if(word[index] === 'S'){
		return 'S';
	}else if(word[index] === 'T'){
		return 'T';
	}else if(word[index] === 'U'){
		return 'U';
	}else if(word[index] === 'V'){
		return 'V';
	}else if(word[index] === 'W'){
		return 'W';
	}else if(word[index] === 'X'){
		return 'X';
	}else if(word[index] === 'Y'){
		return 'Y';
	}else if(word[index] === 'Z'){
		return 'Z';
	}

}
var sort =function(){
	var alphabetNames= {
		A: [],
		B: [],
		C: [],
		D: [],
		E: [],
		F: [],
		G: [],
		H: [],
		I: [],
		J: [],
		K: [],
		L: [],
		M: [],
		N: [],
		O: [],
		B: [],
		Q: [],
		R: [],
		S: [],
		T: [],
		U: [],
		V: [],
		W: [],
		X: [],
		Y: [],
		Z: []
	};
 	var file=readFile();
 	for (var i = 0; i < 5; i++) {
 		file[i]=JSON.parse(file[i])
 		var letter= checkLetter(file[i],0);
		alphabetNames[letter].push(file[i]);
 	}
}
var totalNameScores = function(){
	var sorted = sort();
	var results=[];
	for (var i = 0; i < sorted.length; i++) {
		var sum=0;
		for (var j = 0; j < sorted[i].length; j++) {
			if(sorted[i][j] !== undefined) {
			 	sum+=alphabet[sorted[i][j]];
			}
			if( j === sorted[i].length-1 ){
			  results.push(sum * i);
			}
		}
	}
}

module.exports = {totalNameScores};
