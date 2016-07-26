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
  this.list=[];
  this.head=null;
  this.tail=null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	this.list.push(value);
	this.head=this.list[0];
	this.tail=this.list[this.list.length - 1];
};

LinkedList.prototype.removeHead = function(){
	this.list.shift()
	this.head=[this.list[0]]
};

LinkedList.prototype.contains = function(value){
	if(this.list.indexOf(value) !== -1){
		return true;
	} 
	return false;
};

LinkedList.prototype.makeNode = function(){
	this.list.push(new LinkedList());
};