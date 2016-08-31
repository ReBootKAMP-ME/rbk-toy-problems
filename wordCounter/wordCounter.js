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
  var contents = fs.readFileSync("./news.txt").toString().split(' ');
  var words = {};
  for(var i = 0; i < contents.length; i++){
  	var word;
  	if(contents[i].indexOf('.') !== -1){
  		var temp = contents[i].split('.');
  		for(var j=1; j<temp.length; j++){
  			contents.push(temp[j]);
  		}
  		word = temp[0].split('');
  	} else {
  		word = contents[i].split('');
  	}
  	for(var j=0; j<word.length; j++){
	  	if(word.indexOf(',') !== -1 ||
	  		word.indexOf('\"') !== -1 ||
	  		word.indexOf('\r') !== -1 ||
	  		word.indexOf('\n') !== -1 ||
	  		word.indexOf('\'') !== -1 ||
	  		word.indexOf('') !== -1){
	  		word.splice(j,1);
	  		j--;
	  	}
	}
	var resultWord = word.join('');
	if(!words[resultWord]){
		words[resultWord] = 0;
	}
	words[resultWord]++;
  }
  var result = {};
  for(var key in words){
  	if(words[key] === 1){
  		result[key] = 1;
  	}
  }
  return result;
};

console.log(readFile());

