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
const fs = require('fs');

var readFile = function (){
  var contents = fs.readFileSync("./names.txt").toString();
  return contents.split(",");
}

var totalNameScores = function(){
	var  totalScore=0
	var arrofname=readFile();
	//console.log(arrofname.length,"jioh")
	for (var i = 0; i < arrofname.length; i++) {
		//console.log(arrofname[0])
		//arrofname[i]
		var alphaWorth=0;
		//console.log(arrofname[i].length-1)
		for (var y = 1; y < arrofname[i].length-1; y++) {
			//Things[i]
			//console.log(arrofname[i])
			if(arrofname[i][y]='A'){
				alphaWorth=alphaWorth+1
			}
			if(arrofname[i][y]='B'){
				alphaWorth=alphaWorth+2
			}
			if(arrofname[i][y]='C'){
				alphaWorth=alphaWorth+3
			}
			if(arrofname[i][y]='D'){
				alphaWorth=alphaWorth+4
			}
			if(arrofname[i][y]='E'){
				alphaWorth=alphaWorth+5
			}
			if(arrofname[i][y]='F'){
				alphaWorth=alphaWorth+6
			}
			if(arrofname[i][y]='G'){
				alphaWorth=alphaWorth+7
			}
			if(arrofname[i][y]='H'){
				alphaWorth=alphaWorth+8
			}
			if(arrofname[i][y]='I'){
				alphaWorth=alphaWorth+9
			}
			if(arrofname[i][y]='J'){
				alphaWorth=alphaWorth+10
			}
			if(arrofname[i][y]='K'){
				alphaWorth=alphaWorth+11
			}if(arrofname[i][y]='L'){
				alphaWorth=alphaWorth+12
			}
			if(arrofname[i][y]='M'){
				alphaWorth=alphaWorth+13
			}
			if(arrofname[i][y]='N'){
				alphaWorth=alphaWorth+14
			}
			if(arrofname[i][y]='O'){
				alphaWorth=alphaWorth+15
			}
			if(arrofname[i][y]='P'){
				alphaWorth=alphaWorth+16
			}
			if(arrofname[i][y]='Q'){
				alphaWorth=alphaWorth+17
			}
			if(arrofname[i][y]='R'){
				alphaWorth=alphaWorth+18
			}
			if(arrofname[i][y]='S'){
				alphaWorth=alphaWorth+19
			}
			if(arrofname[i][y]='T'){
				alphaWorth=alphaWorth+20
			}
			if(arrofname[i][y]='U'){
				alphaWorth=alphaWorth+21
			}
			if(arrofname[i][y]='V'){
				alphaWorth=alphaWorth+22
			}
			if(arrofname[i][y]='W'){
				alphaWorth=alphaWorth+23
			}
			if(arrofname[i][y]='X'){
				alphaWorth=alphaWorth+24
			}
			if(arrofname[i][y]='Y'){
				alphaWorth=alphaWorth+25
			}
			if(arrofname[i][y]='Z'){
				alphaWorth=alphaWorth+26
			}
			console.log(alphaWorth)
		}
		console.log(alphaWorth,"hgu")
		totalScore=totalScore+alphaWorth*i;
	}
	//console.log(this.contents)
  return totalScore;
}

module.exports = {totalNameScores};

//   /Users/admin/Desktop/rbk-toy-problems-1/scoreAName