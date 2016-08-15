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
	var dir = [];
	var result ={};
	for (var i = 0; i < directions.length; i++) {
		if(result[directions[i]] === undefined){
			result[directions[i]]=1;
		}else{
			result[directions[i]]++;
		}
	}
	if(result.WEST !== result.EAST){
		if (result.WEST > result.EAST) {
			var x = result.WEST - result.EAST;
			for (var i = 0; i < x; i++) {
				dir.push("WEST");
			}
		}else{
			var x = result.EAST - result.WEST;
			for (var i = 0; i < x; i++) {
				dir.push("EAST");
			}
		}
	}else if (result.NORTH !== result.SOUTH) {
		if (result.NORTH > result.SOUTH) {
			var x = result.NORTH - result.SOUTH;
			for (var i = 0; i < x; i++) {
				dir.push("NORTH");
			}
		}else{
			var x = result.SOUTH - result.NORTH;
			for (var i = 0; i < x; i++) {
				dir.push("SOUTH");
			}
		}
	}
	return dir;
};

