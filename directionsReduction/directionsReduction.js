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

walk through the array, if any item is preceeded by its opposite, then remove both, 
reset from begining, then do the same, until no more removes were done

*/

var dirReduc = function(directions){
	var i = 0;
	var l = directions.length;
	var opposites = {
		'NORTH': 'SOUTH',
		'SOUTH': 'NORTH',
		'EAST': 'WEST',
		'WEST': 'EAST'
	};

	while (i < l) {
		if (directions [i] === opposites [directions[i+1]]) {
			directions.splice(i,2);
			i = 0;
			l = l - 2;
		} else {
			i++;
		}
	}
	return directions
};

