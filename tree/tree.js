/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var tree=Object.create(methods);
	tree.value=value;
	tree.nodes=[];
	return tree;
};

//methods go here!
var methods = {
	addChild : function(value){
		this.nodes.push(treeMaker(value));
	},

	contains : function(value){
		if(this.value===value)
			return true;
		for (var i = 0; i < this.nodes.length; i++) {
			 if(this.nodes[i].contains(value)){
			 	return true
			 }
		}
		return false;
	}
}

