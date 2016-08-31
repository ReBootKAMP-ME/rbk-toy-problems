/*
From given file, return all unique words with their counts.
Do not include commas, spaces, double quotes..etc but you can keep 
the apostrophes to avoid complexities.

Example>>
input: "I've scars – is an incredibly humbling experience,\” Ambrose said."

output: 
{
	"I've"       :1,
	"scars"      :1,
	"is"         :1,
	"an"         :1,
	"incredibly" :1,
	"humbling"   :1,
	"experience" :1,
	"Ambrose"    :1,
	"said"       :1
}

Run the file using Node
$ node wordCounter.js

You can check your output with http://www.writewords.org.uk/word_count.asp
*/

fs = require('fs');

var readFile = function (){
	var contents = fs.readFileSync("./news.txt").toString();
	contents = contents.split(' ');
	var wordCount = {};
	var count = 0;
	for (var i = 0; i < contents.length; i++) {
		if(contents[i].indexOf('\n') !== -1) {
		  	contents[i] = contents[i].split('\n');
		  	contents[i] = contents[i].join('');
		}
		if(contents[i].indexOf("'") !== -1) {
		  	contents[i] = contents[i].split("'");
		  	contents[i] = contents[i].join('');
		}
		if(contents[i] === '') {
			contents.splice(i, 1);
		}
		contents[i].trim()
		if(contents[i].match(/[^a-zA-Z0-9]/)) {		
			contents[i] = contents[i].split('');
			for (var j = 0; j < contents[i].length; j++) {
				if (contents[i][j].match(/[^a-zA-Z0-9']/)) {
					contents[i].splice(j, 1, ' ');
				}
			}
			contents[i] = contents[i].join('');
			var temp = contents[i].split(' ');
			contents.splice(i,1)
			for (var k = 0; k < temp.length; k++) {
				if (temp[k] !== ''){
					contents.splice(i,0,temp[k]);
				}
			}
		}
		if (!wordCount[contents[i]]) {
			wordCount[contents[i]] = 1;
		} else {
			wordCount[contents[i]] += 1;
		}
	}
	for (var key in wordCount) {
		if (wordCount[key] > 1 || parseInt(key)) {
			delete wordCount[key]
			count ++;
		}
	}
	console.log(count)
  return wordCount;
};
console.log(readFile())
