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
  var result=[];
  var arr=["rock", "paper","scissors"];
  for (var i = 0; i < arr.length; i++) {
  	for(var j=0; j < arr.length ; j++){
  		for (var k = 0; k < arr.length; k++) {
  			result.push([arr[i],arr[j],arr[k]]);
  		}
  	}
  }
  return result;
  
};

[0,1,2,3,4,5]
if()
var rockPaperScissors = function(n) {
  var result=[];
  var arr=["rock", "paper","scissors"];

  if(n==0)
  {
  	result
  }
  return result;
  for (var i = 0; i < arr.length; i++) {
  	for(var j=0; j < arr.length ; j++){
  		for (var k = 0; k < arr.length; k++) {
  			result.push([arr[i],arr[j],arr[k]]);
  		}
  	}
  }
};
