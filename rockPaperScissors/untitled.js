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
var numofresult=3^3;
var result=[];
var rockPaperScissors = function() {
	if(numofresult===0){
		return result;
	}else{
	var arr=["rock", "scissors", "paper"];
     	var arr1=[];
     for (var i = 0; i < 3; i++) {
     	var rand=Math.floor((Math.random() * 3) + 0);
         arr1.push(arr[rand])
     	
     }
    result.push(arr1);
    numofresult--;
    rockPaperScissors();
 }

};
