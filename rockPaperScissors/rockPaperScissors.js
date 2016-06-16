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

var rockPaperScissors = function() {
	var x = 27;
  var result = [];
  while (x>0){
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
		x--;
		}
	}

  return result
};
