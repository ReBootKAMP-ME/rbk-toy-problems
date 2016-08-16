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
var checkOpposite = function(value1, value2){
	if(value1 === 'SOUTH' && value2 === 'NORTH'){
		return true;
	}
	if(value1 === 'NORTH' && value2 === 'SOUTH'){
		return true;
	}
	if(value1 === 'EAST' && value2 === 'WEST'){
		return true;
	}
	if(value1 === 'WEST' && value2 === 'EAST'){
		return true;
	}
	return false;
};

var dirReduc = function(directions){
	var myArr = directions.slice();	
	for(var i=0; i<myArr.length-1; i++){
		var enterFlag = false;
		for(var j=0; j<myArr.length-1; j++){
			if(checkOpposite(myArr[j], myArr[j+1])){
				enterFlag = true;
				myArr.splice(j,2);
				j -= 2;
			}
		}
		if(enterFlag){
			break;
		}
	}
	return myArr;
};

