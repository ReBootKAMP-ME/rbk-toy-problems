/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var newTree = Object.create(treeMaker.methods)
	newTree.root = value
	newTree.children = {}

	return newTree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	newTree.children[value] = treeMaker(value)
};

treeMaker.methods.contains = function(value){

	if(newTree.root === value){
		return true
	} else {

		for(var key in newTree.children){
			console.log(key)
			if(JSON.stringify(key) === value){
				return true
			} 
		}
	}
};
