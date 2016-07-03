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
	var storage=Object.create(treeMaker.methods);
	storage.value=value;
	storage.children=[];
	return storage;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	var newChild= treeMaker(value);
	this.children.push(newChild);
};

treeMaker.methods.contains = function(value){
	var result=false;
	contain=this;
	while(true){
		if(contain.value!==null){
		if(contain.value===value){
			result=true;
			break;
		}else{
			for(var i=0;i<contain.children.length;i++){
				if(contain.children[i].value===value){
					return true;
				}else{
					contain=children[i];
				}
			}
		}
	}else{
		break;
	}
}
	return result;
};
