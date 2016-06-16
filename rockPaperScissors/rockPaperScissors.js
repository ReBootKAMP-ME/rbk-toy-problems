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
	var resultarr=[];
	var rock ="rock";
	var scissors="scissors";
	var paper="paper";
	for(var i=0;i<resultarr.length;i++){
		if( rock === "rock"){
		resultarr.push(
			["rock", "rock", "rock"],
			["rock", "rock", "paper"],
			["rock", "rock", "scissors"])
		}
  	}
	else if (paper === "paper"){
		resultarr.push(
			["paper", "paper", "paper"],
			["paper", "paper", "rock"],
			["paper", "paper", "scissors"],)
	}
	else   { scissors === "scissors"
		    resultarr.push(
			["scissors", "scissors", "scissors"],
			["scissors", "scissors", "rock"],
			["scissors", "scissors", "scissors"])
	}
	else if ( rock === "rock" || paper === "paper"|| scissors === "scissors")
	return rockPaperScissors();
	}