
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
	var arrayMaster=[];
	var arraySolutions=["rock","scissors","paper"];
	var index=0;
	var array=[];
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			for(var k=0;k<3;k++){
				array=[];
				array.push(arraySolutions[i],arraySolutions[j],arraySolutions[k]);
				arrayMaster.push(array);
			}
		}
	}
  	return arrayMaster;
};
