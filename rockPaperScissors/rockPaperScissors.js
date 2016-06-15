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




// ================================================================================
// each element of the types going first element then the second two types.
// rock with others is three 

// first [[1,1,1],[2,2,2], [3,3,3],  ]


var rockPaperScissors = function() {
  var games = 3;
  var types1 = ["rock", "paper", "scissors"];
  var types2 = ["rock", "paper", "scissors"];
  var types3 = ["rock", "paper", "scissors"];
  var singlePosibility = [];
  var allPossibilities = [];

  //var theBigArrayDimention  = 729;
  for (var i = 0; i < types1.length; i++) {
  	for (var j = 0; j<types2.length; j++){
  		for (var k = 0; k < types3.length; i++) {
  		singlePosibility.push(types1[i]);
  		singlePosibility.push(types2[j]);
  		singlePosibility.push(types3[k]);
  	}
  	//console.log(singlePosibility);
  	//allPossibilities.push(singlePosibility);
//  	  	singlePosibility = [];
  }
}
return allPossibilities;
};
