
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



Array.prototype.isSubsetOf = function (arr) {
	//secand solution
	var bigArray=arr;
	var isAll=0;
	for (var i = 0; i < bigArray.length; i++) {
		for (var j = 0; j < this.length; j++) {
			if(JSON.stringify(this[j]) === JSON.stringify(bigArray[i])){
				isAll++;
			}
		}
	}
	if(isAll >= this.length){
		return true
	}
	return false;
}

function randInt() {
    return Math.floor(Math.random() * (2 + 1));
}

var rockPaperScissors = function() {
  var gameOfThree = [];
  var allSolution = [];

  while(allSolution.length <27){
  	var shoot = randInt();
  	
  	if(shoot === 0){
  		gameOfThree.push("rock");
  	}else if(shoot === 1){
  		gameOfThree.push("paper");
  	}else{
  		gameOfThree.push("scissors");
  	}
  	
  	if(gameOfThree.length>2){
  		if(!gameOfThree.isSubsetOf(allSolution)){
  			allSolution.push(gameOfThree);
  		}
  		gameOfThree=[];
  	}
  }
    return allSolution;
};





