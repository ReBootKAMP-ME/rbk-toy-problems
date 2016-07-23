
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
var array=[];
var generates=function(valueslength,values){
	var guess=[];
	var flag=[];
	for (var i = 0; i < valueslength; i++) {
	  guess.push(values[Math.floor((Math.random()*valueslength))]);
	}
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			if(array[i][j]=== guess[j])
			  flag.push(false);
		}
		
	}
	if(flag.length !== guess.length){
		array.push(guess);
		return array;
	}
	else
		generates(valueslength,values);

}
var rockPaperScissors = function() {
	var values=["rock","paper","scissors"];
	for (var i = 0; i < Math.pow(values.length,values.length); i++) {
		generates(values.length,values);
	}

	return array;


};
