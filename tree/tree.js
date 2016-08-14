/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker(5);
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
	var instance = Object.create(methods);
	instance.value = value;
	instance.children = [];
	return instance;
};

//methods go here!
var methods = {
		addChild: function (value) {
			this.children.push(treeMaker(value));
		},
		contains: function (value) {
			if (this.value === value) {
        		return true;
      		} else if(this.children.length > 0) {
          		for (var i = 0; i < this.children.length; i++) {
          			if(this.children[i].value === value){
          				return true;
          			}
          		}
          		for (var i = 0; i < this.children.length; i++) {
              		this.children[i].contains(value);
            	}
      		}
      		return false;
		}
};

// treeMaker.methods.addChild = function(){
// };

// treeMaker.methods.contains = function(){
// };
