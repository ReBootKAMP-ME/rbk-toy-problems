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
  this.head = {}
  this.tail = null
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	if(!this.head.value){
		this.head = this.makeNode(value)
		this.head.next = this.tail
	} else if (!this.head.next) {
		this.tail = this.makeNode(value)
		this.head.next = this.tail
	} 
	
};

LinkedList.prototype.removeHead = function(){
};

LinkedList.prototype.contains = function(){
};

LinkedList.prototype.makeNode = function(value){
	var node = {}

	node.value = value
	node.next = null

	return node
};