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
 var newtree={};
 
 newtree=Object.create(methods);
 newtree.value=value;
 newtree.child=[];
return newtree;
};

//methods go here!
var methods = {
addChild : function(value){
	var newchild=new treeMaker(value)
	this.child.push(newchild);
},

contains : function(query){
	// we will search about element in  the tree 

  if(this.value == query){
   	return flage;
	}
  for (var i = 0; i < this.child.length; i++) {
	this.child[i].contains(query);
	} 
   
}
}
