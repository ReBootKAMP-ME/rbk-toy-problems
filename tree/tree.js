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
 
 var tree=Object.create(treeMakerMethods);
  tree.value=value;
 tree.children=[];
 tree.storage=[];
 return tree;
};

//methods go here!
treeMakerMethods = {};

treeMakerMethods.addChild = function(value,parent){
      var child={value:value,children:[]};
      for (var i=0;i<this.storage.length;i++){
      	   if (this.storage[i].value===parent){
      	   	  this.storage[i].children.push(value);
      	   }
      }
      this.storage.push(child);
      return this.storage;
};

treeMakerMethods.contains = function(value){
	  for (var i=0;i<this.storage.length;i++){
      	   if (this.storage[i].value===value){
      	   	return true;	  
      	   }
      	}
      	return false;
};
