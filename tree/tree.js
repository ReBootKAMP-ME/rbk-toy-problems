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
 var obj = Object.create(treeMethods);
 obj.value = value;
 obj.children = [];
 return obj;
};

//methods go here!

var treeMethods = {
	
	addChild: function(value){
		this.children.push(treeMaker(value));
	},

	contains: function(value){
		var flag;
		if(this.value === null || this.value !== value){
			flag = false;
		}
		if(this.value === value){
			flag = true;
		}
		for(var i=0; i<this.children.length; i++){
			flag = flag || this.children[i].contains(value)
		}
		return flag;
	}
}