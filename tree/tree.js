/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var som = Object.create(treeMaker.methods)
	som.value=value;
	return som;
};

//methods go here!
treeMaker.methods = {};

treeMakermethods.addChild = function(value){
// here we need to check every child if undefiend we give him empty array then we add the value
// if we have a child we skip it and go to another child and check it
};

treeMakermethods.contains = function(value){
	//here i give the fucntion value and  it will go and search for if and child have the same value to return it or return true
	//
};
