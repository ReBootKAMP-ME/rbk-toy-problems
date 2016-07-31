/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var tree = Object.create(treeMaker.methods); // we used for prototypial
	tree.child = [];
	tree.value; = value;
	return tree;
 
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(parentValue , childValue){
	if(this.contains(parentValue) === false || parentValue === null ){
		parentValue = this.root[parent];
		this.root[parent].push(value);
		return true;
	}
	else{
		for(var i=0 ; i<this.root[parent].length ; i++){
			if(this.root[parent][i] === parentValue)
				//push the value into the child of given parent
				return true,

		}
	}
};

treeMaker.methods.contains = function(value){
	for(var i=0 ; i<this.root[parent].length ; i++){
		if(this.root[parent].indexOf(value) > 0)
			return true;
	}
	return false;
};
