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
	this.value = {};
	this.next = null;
	this.tail = null;
	this.head = null;
	this.length = 0;
  //fill me in!
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	if(this.tail === null ){
		this.value = value;
		this.head = this.value;
		this.tail = this.value;
		this.length++
	}
	this.tail.next = {this.value :value,
				 	  this.value : null
					 }
	this.tail = this.tail.next;
	this.length++;

};

LinkedList.prototype.removeHead = function(){
	var head = this.head;
	this.head = this.head.next;
	this.length--;
	return head;
	
};

LinkedList.prototype.contains = function(value){

	var containValue = function(node){

		if (this.head.value === value){
			return true;
		}
		if ( this.head.next.value === value){
			return true
		}
		
	}
	
};

LinkedList.prototype.makeNode = function(value){
	// this.value = value;
	// this.next = null;
};