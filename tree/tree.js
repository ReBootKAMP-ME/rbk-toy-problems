/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'


var treeMaker = function(){
 //tree code goes here!
 var treemethods = Object.create(methods);
 treemethods.tree={};
 treemethods.children={};

 return treemethods;
};

//methods go here!
var methods={};

methods.addChild = function(value){
	this.tree.value=value;
};

methods.contains = function(value){
	if(this.children[value]===value)
		return true;
	return false;

};
