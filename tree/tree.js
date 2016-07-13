/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'
var treeMaker = function(value){
 var newtree = Object.create(treeMaker.methods)
  newtree.item = value;
  newtree.children = [];
  return newtree;
};

treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
	this.children.push(value)
};

treeMaker.methods.contains = function(item){
	if(this.item === item){
		return true;
	}
	function finding(element){
	for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].contains(item)){
				return true;
			}
	}
	return false;
	finding(children[i])	
	}
}
