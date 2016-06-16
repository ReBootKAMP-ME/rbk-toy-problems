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
var newArr = [];

var rockPaperScissors = function() {
  var arr = ["rock","paper","scissors"]
  for (var i = 0; i < arr.length; i++) {
  	for (var i = 0; i < arr.length; i++) {
  		for (var i = 0; i < arr.length; i++) {
  	if(newArr.length===27){
  		return newArr;
  	}
  	newArr.push(arr[i])
  
  			
  		}
  	}
  }

};
