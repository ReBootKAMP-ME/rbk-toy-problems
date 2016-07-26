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
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	if(this.head === null){
		this.head = {value: value, next: null};
		this.tail = {value: value, next: null};
	}else {
		this.tail.next = {value: value, next: null};
		this.tail = this.tail.next;
		if(this.head.next === null){
			this.head.next = this.tail
		}
	}
};

LinkedList.prototype.removeHead = function(){
	if(this.head !== null){
		var d = this.head.value;
		this.head = this.head.next;
		return d;
	}
};

LinkedList.prototype.contains = function(value){
	var node = this.head;
	debugger	
	if(this.head === null){
		return false;
	}
	if(this.head.next === null){
		return this.head.value === value;
	}
	while(node !== null){
		if(node.value === value){
			return true;
		}
		node = node.next;
	}
	return false
};

LinkedList.prototype.makeNode = function(value){
	return {value: value, next: null};
};
var list = new LinkedList();
console.log(list.tail);         //yields 'null'
list.addToTail(4);
list.addToTail(5);
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead()); //yields '4'
console.log(list.tail.value);   //yields '5';