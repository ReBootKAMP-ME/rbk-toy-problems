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
 var newArr = [];
  var arr = ["rock","paper","scissors"]
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
    		for (var k = 0; k < arr.length; k++) {
          newArr.push([arr[i],arr[j],arr[k]])
        }	
      }
    }
    return newArr;
};
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
var rockPaperScissors = function(num) {
  var choices = ['rock','paper','scissors'];
  var result = [];
  var iterate = function(arr){
    if(arr.length === num){
      result.push(arr);
      return;
    }
    for (var i = 0; i < choices.length; i++) {
      iterate(arr.concat(choices[i]));
    };
  }
  iterate([]);
  return result;
};

