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
 var methods=Object.create(treeMaker.prototype);
 methods.theTree= {};
 return methods;
};

//methods go here!
//treeMaker.methods = {};

treeMaker.prototype.addChild = function(val,parent){
	if(parent===undefined){
		this.theTree[val]=val;
		return this.theTree;
	}
	else{
		//this.theTree[parent val
		//return this.theTree;
	}
};

treeMaker.prototype.contains = function(val){
	for (var key in theTree) {
		if(theTree[val]===val){
			return true;
		}
	}
	return false;
};
