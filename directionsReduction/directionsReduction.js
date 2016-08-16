/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/
var dirReduc = function(directions){
	var ways = {
		NORTH : 0 , 
		SOUTH : 0 ,
		EAST : 0 ,
		WEST : 0
	}
	// how to eliminate all unnecessary choices 
	// define new array which would hold our new direction
	var newDirection = [];
		// iterate through directions array
	for(var i = 0 ; i < directions.length; i++){
		ways[directions[i]]++;
	}
	if(ways.NORTH - ways.SOUTH > 0){
		newDirection.push('NORTH');
	} else if( ways.SOUTH - ways.NORTH > 0){
		newDirection.push('SOUTH');
	} else if(ways.EAST - ways.WEST > 0){
		newDirection.push('EAST');
	} else if(ways.WEST - ways.EAST > 0){
		newDirection.push('WEST');
	}
	return newDirection;
};

