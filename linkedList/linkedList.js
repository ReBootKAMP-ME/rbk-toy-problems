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

// Here is a way that I am convinced of that does not pass all the tests

var LinkedList = function(v){
  this.head = {};
  this.head.value = v ? v : null;
  this.tail = null;
  this.value = v ? v : null;
};

//write methods here!

LinkedList.prototype.addToTail = function(v){
	if (!this.head.value){
		this.head.value = v;
	} else if (!this.tail){
		this.tail = new LinkedList(v);
	} else {
		this.tail.addToTail(v);
	};
};

LinkedList.prototype.removeHead = function(){
	var oldHead = this.head.value;
	if (this.tail){
		this.head.value = null;
		this.value = this.tail.value
	} else {
		this.head = null;
	}
	return oldHead;
};

LinkedList.prototype.contains = function(v){
	if(this.head.value === v){
		return true;
	} else if (this.tail) {
		return this.tail.contains(v);
	} else {
		return false;
	}
};

LinkedList.prototype.makeNode = function(){
};