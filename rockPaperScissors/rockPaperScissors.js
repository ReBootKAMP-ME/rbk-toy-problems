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
	//var n=3;
	var result=[];
	var items=["rock", "paper", "scissors"];
	//var count=(n+r-1)/(n-1)*r

	for(var i=0 ; i<=27 ; i++){
	var game="";
		for (var i=0 ; i<3 ; i++){
			var item= items[Math.floor(Math.random()*items.length)];
			game=game+ " " + item;
			console.log(game);
	}
		if(result.indexOf(game)<=-1){
		result.push(game.split(" "));
		}
	}
	return result;
};
