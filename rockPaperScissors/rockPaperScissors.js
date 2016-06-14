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
//  now we need to find how to arrange the 27 posibbilities for the case of three
var rockPaperScissors = function() {
  var choices = ["rock" , "paper" , "scissors"]
  var bigArray=[] ;
  for(var a= 0 ; a <choices.length ; a++){
	for(var j = 0 ; j<choices.length ; j++)
		for(var i = 0 ; i<choices.length ; i++)
		bigArray.push([choices[a],choices[j] ,choices[i]]) ;
		
}
return bigArray ;
};
