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

var wordCounter = function(){
	var string = readFile();
	var arr = string.split(' ');
	var result = {};
	var specialCharacter = ['/',',','-','_','!','@','#','$','%','^','&','*','(',')','+','<','>',':',';','|','?'];
	for(var i=0 ; i<arr ; i++){
		if(specialCharacter.indexOf(arr[i]) < 0){
			var keys = Object.keys(result);
			if(keys.indexOf(arr[i]) < 0){
				result[arr[i]] = 1;
			}else{
				var value = result[arr[i]];
				result[arr[i]] = value + 1;
			}
		}
	}
	return result;
}
