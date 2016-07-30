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
  this.head=null;
  this.tail=null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	var node = this.makeNode(value)
	if(this.head === null){
		this.head = node;
		this.tail=this.head;
	}else{
		this.tail.next = node;
		this.tail=node;
	}
};

LinkedList.prototype.removeHead = function(){
	if(this.head !== null){
		var temp = this.head.value;
		this.head = this.head.next;
		return temp;
	}
};

LinkedList.prototype.contains = function(target){
	while(this.head!== null && this.head !== undefined){
      if(this.head.value === target){
        return true;
      }else{
        this.head = this.head.next;
      }
    }
    return false;
};

LinkedList.prototype.makeNode = function(value){
	var node={};
	node.value=value;
	node.next={};
	return node;
};