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
   var arrayGame=["rock","paper","scissors"];
   var array=[];
   
 while(array.length!==27){
 	var b=(Math.floor(Math.random()*2));
     subArray=[];
     subArray.push(arrayGame[b],arrayGame[b],arrayGame[b]);
     if (array.indexOf(subArray)===-1){
     	array.push(subArray);
     }
   }
   return array;
};


