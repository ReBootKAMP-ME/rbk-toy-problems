/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){

 	var tree=Object.create(treeMaker.methods);

 	tree.id=value;
 	tree.children=[];

 return tree;

};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(n){
	for (var i = 0; i < n; i++) {
		var child = treeMaker(i);
		this.children.push(child);
	}

};

treeMaker.methods.contains = function(n){
	if (this.children.length >= n){
		return true;
	}else{
		return false
}
};
