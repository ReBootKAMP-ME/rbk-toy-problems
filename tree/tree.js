/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
 //tree code goes here!
 var Root = Object.create(treeMaker.methods);
 Root.value=value;
 Root.children=[];
return Root;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	this.children.push(new treeMaker(value))
};

treeMaker.methods.contains = function(target, currentChild){
	currentChild = currentChild || this;
	if(target === currentChild.value){
		return true;
	}
	for (var i=0; i< currentChild.children.length; i++){
		if(this.contains(target,currentChild.children[i])){
			return true
		}
	}
	return false;
};
