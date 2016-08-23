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
	if (directions.length === 1){
		return directions[0]
	}
	for (var i = 0; i < directions.length; i++) {
		if (directions[i]===directions[i+1]  ){
			directions.splice(i,1);
			i = -1;
		}
		if((directions[i]== "NORTH" && directions[i+1]== "SOUTH") || (directions[i]== "SOUTH" && directions[i+1]== "NORTH" )){
			directions.splice(i,2);
			i = -1;
		}

		if(directions[i]==="EAST" && directions[i+1]=="WEST" ||directions[i]==="WEST" && directions[i+1]=="EAST" ){
			directions.splice(i,2);
			i = -1;
		}
		
	}
	return directions;

};

