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
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	var node = this.makeNode(value);
	if(this.head === null){
		this.head = node;
	} else {
		this.tail.next = node;
	}
	this.tail = node;
};

LinkedList.prototype.removeHead = function(){
	var tempVal = this.head.value;
	this.head = this.head.next;
	return tempVal;
};

LinkedList.prototype.contains = function(value){
	var pointer = this.head;
	while(pointer !== null){
		if(pointer.value === value){
			return true;
		}
		pointer = pointer.next;
	}
	return false;
};

LinkedList.prototype.makeNode = function(value){
	var newNode = {};
	newNode.value = value;
	newNode.next = null;
	return newNode;
};