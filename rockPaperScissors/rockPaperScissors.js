
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

var random = function (n){
  return Math.floor(Math.random()* n+1)
}
Array.prototype.isSubsetOf = function (arr) {
	var flag= 0;
	for (var i=0; i <arr.length; i++){
		for(var k=0; k<this.length; k++){
			if (JSON.stringify(this[k]) === JSON.stringify(arr[i]))
				flag++;
		}
	}
	return flag>= this.length ? true : false;
}

var rockPaperScissors = function(n) {
  var result = [];
  var x = Math.pow(3,n);
  while (result.length<x){
  	var onegame=[];
	  for (var i=0; i<3;i++){
		  var rand= random(3);
			  if (rand ===1){
			  	onegame.push("rock")
			  } else if(rand === 2){
			  	onegame.push("paper")
			  }else if(rand === 3) {
			  	onegame.push("scissor")
			  }
	}
	if (onegame.isSubsetOf(result) === false){
		result.push(onegame);
		}
	}

  return result
};


// This is Pavel solution for the problem 
var rockPaperScissors2 = function() {
  var choices = ['rock','paper','scissors'];
  var result = [];
  for (var i = 0; i < choices.length; i++) {
    for (var j = 0; j < choices.length; j++) {
      for (var k = 0; k < choices.length; k++) {
        result.push([choices[i],choices[j],choices[k]]);
      }
    }
  };
  return result;
};
