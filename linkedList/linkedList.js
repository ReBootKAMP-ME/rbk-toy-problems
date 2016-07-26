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
// never got comfortable with this

LinkedList.prototype.addToTail = function(value){
	// if our head is null 
	// then our node will be in the head
	// and our tail would be the next 
	// but if our head is not null
	// then we want to add to the tail a new node
	// how do we set up the next to take the next object
	// we want first to set 
	if(this.head === null){
		var node = new this.makeNode(value);
		this.head = node;
		this.tail = node;
	} else {
		var x = this.tail;
		var node = new this.makeNode(value);
		this.tail = node;
		this.head.next = node;
	}
};


LinkedList.prototype.removeHead = function(){
	this.head = this.head.next;
	return this.head.value;
};

LinkedList.prototype.contains = function(value , head){
	// define the head to a variable 
	var list = this.head;
	// while false
	while(list.value !== value){
		if(list.next !== null){
			list = list.next;
		} else {
			return false;
		}
	}
	// if our list's value is true it wont enter the while loop and will return true
	return true;
};

LinkedList.prototype.makeNode = function(value){
	// node will be an object that has next 
	// and a value MAYBE!
 	this.value = value;
 	this.next = null;
};








