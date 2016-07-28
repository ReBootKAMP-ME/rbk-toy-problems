<<<<<<< HEAD
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
  var solution = [];
  var possibleVals = ['rock','paper','scissors'];
  for(var i=0; i<3; i++){
  	for(var j=0; j<3; j++){
		for(var k=0; k<3; k++){
			solution.push([possibleVals[i],possibleVals[j],possibleVals[k]]);
		}
  	}
  }
  return solution;
};

// var rockPaperScissors = function(num) {
//   var choices = ['rock','paper','scissors'];
//   var result = [];
  
//   var iterate = function(arr){
//     if(arr.length === num){
//       result.push(arr);
//       return;
//     }
//     for (var i = 0; i < choices.length; i++) {
//       iterate(arr.concat(choices[i]));
//     };
//   }
//   iterate([]);
//   return result;
// };
