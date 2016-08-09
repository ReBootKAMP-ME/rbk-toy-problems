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
	var bool = 0
	
	for (var i = 0; i < arr.length; i++) {
		for(var j = 0; j < this.length; j++){
			if(JSON.stringify(this[j]) === JSON.stringify(arr[i])){
				bool++
			}
		}
	}
	return bool >= this.length ? true : false 
}


var rockPaperScissors = function(n) {
	var result = []
	var rpc = ['rock', 'paper', 'scissors']
	var numSol = Math.pow(3, n)
	while(result.length < numSol){
		var innerArr = []
		for(var i = 0; i < n; i++){
			var rnd = Math.floor(Math.random() * 3)
			if(rnd === 0){
				innerArr.push(rpc[0])
			} else if (rnd === 1){
				innerArr.push(rpc[1])
			} else if (rnd === 2){
				innerArr.push(rpc[2])
			}
		}

		if(!innerArr.isSubsetOf(result)){
			result.push(innerArr)
		}
	}
	return result
}