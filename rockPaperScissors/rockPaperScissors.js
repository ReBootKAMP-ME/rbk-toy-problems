
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function() {
	var choices=["rock", "paper", "scissors"]
	var result=[];
	for (var i = 0; i < choices.length; i++) {
		for (var j = 0; j < choices.length; j++) {
			for (var k = 0; k < choices.length; k++) {
				result.push([choices[i],choices[j],choices[k]])
				
			};
		};
	};

	
	return result;
  // fill me out!
};

var rockPaperScissorsAdvanced=function(num){
	var choices = ['rock','paper','scissors'];
	var result = [];
  
	var iterate = function(arr){
		if(arr.length === num){
		  result.push(arr);
		  return;
		}
		for (var i = 0; i < choices.length; i++) {
		  iterate(arr.concat(choices[i]));
		};
	}
	iterate([]);
	return result;
}

