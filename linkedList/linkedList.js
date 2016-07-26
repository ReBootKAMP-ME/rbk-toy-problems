/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
  /*LinkedList ={
  	head: null,
  	tail: null
  }*/ 
  	
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	this.push(value)
};

LinkedList.prototype.removeHead = function(){
	this.shift()
};

LinkedList.prototype.contains = function(value){
	for (var i = 0; i < this.length; i++) {
		if (this[i] === value){
			return true;
		} else {
			return false;
		}
	}
};

LinkedList.prototype.makeNode = function(){
};