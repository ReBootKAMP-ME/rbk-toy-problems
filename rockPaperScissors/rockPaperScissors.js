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
	var solutions = [] ; 
	var Sol= "rock" || "paper" || "scissors" ;
	var Subsolutions = [sol,sol,sol] ; 
    	for (var i = 0; i < solutions.length; i++) {
    		solutions.psuh(Subsolutions) ; 

   
    	}
    	return solutions ; 

      }
  // fill me out!
};
