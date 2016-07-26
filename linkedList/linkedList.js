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
  this.head=null;
  this.tail=null;
};

//write methods here!

LinkedList.prototype.addToTail = function(
value){
	if(this.head===null){
		this.tail=this.makeNode(value);
		this.head=this.tail;
	}
	else{
		this.tail.next= this.makeNode(value);
		this.tail=this.tail.next;
	}
};

LinkedList.prototype.removeHead = function(){
	var temp = this.head.value;
	this.head=this.head.next;
	return temp;
};

LinkedList.prototype.contains = function(
query){
	for(var key in this){
		if(this.head.value===query){
			return true;
		}
		else if(this.head.next.value===query){
			return true;
		}	
	}	
	return false;
};

LinkedList.prototype.makeNode = function(value
){
	var node={
		value:value,
		next:null
	}
	return node;
};

var list = new LinkedList();
list.tail;         //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.head.value;   //yields '4';
list.contains(5);  //yields 'true';
list.contains(6);  //yields 'false';
list.removeHead(); //yields '4'
list.tail.value;   //yields '5';
