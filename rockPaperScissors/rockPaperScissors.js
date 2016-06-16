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
	var arrPos=["rock","paper","scissors"];
	var arr=[];
    var array=[];
    //var c=0;
	for (var i = 0; i < arrPos.length; i++) { //rock
     	 for(var j=0; j<arrPos.length ;j++) {//rock,paper
 	    	 for(var jj=0; jj<arrPos.length ;jj++) {//rock,paper,scissors

      		 	array[i]=arrPos[i]+","+arrPos[j]+","+arrPos[jj];
      		 	console.log(array)
       				arr.push(array)
			}

   		 }
   	}
	return arr;
};

