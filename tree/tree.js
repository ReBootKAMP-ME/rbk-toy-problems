/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var treeA=Object.create(treeMaker.methods);
 	treeA.child={}
 	treeA.value=value
	treeA.key=0
	console.log(treeA)
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
	this.child[this.key]=value
	console.log(treeA.child)
};

treeMaker.methods.contains = function(val){
	var resTree=true;
   if(this.value !== val) {
   	resTree= false;
   	for (var key in treeArr.child) {
   		if (this.child[key].contains(val)){
   			resTree = true;
   		}
   	}
}
	else{
			return  true;
		}

 	  	return resTree;
   


};
