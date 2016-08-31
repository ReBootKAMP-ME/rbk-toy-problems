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
  return contents;
};

var frequency = function(){
	var words = readFile().split('\n').join(' ').split('\r').join(' ').split('"').join(' ').split(',').join(' ').split('-').join(' ').split('.').join(' ').split('/').join(' ').split(' ')
	var wordFreq = {}

	for(var i = 0; i < words.length; i++){
		if(words[i] !== ''){
			if(wordFreq[words[i].toLowerCase()]){
				wordFreq[words[i].toLowerCase()]++
			} else {
				wordFreq[words[i].toLowerCase()] = 1
			}
		}
	}

	return wordFreq
}

console.log(frequency())