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

var rockPaperScissors = function(n) {
	var array=[];
	var a=["rock","paper","scissors"]
	for(var x=0;x<n;x++)
		{for(var j=0;j<n;j++)
			{ for(var i=0;i<n;i++)
		 		{var arr=[];
		 			if(j>i)
				{arr.push(a[i]);
				}
				else {arr.push(a[j]);}
					}
		array.push(arr);
			}
		}
	return array;

};
