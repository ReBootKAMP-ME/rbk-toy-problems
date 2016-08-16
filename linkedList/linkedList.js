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
   this.node={};
};

//write methods here!

LinkedList.prototype.addToTail = function(value	){
    var newNode={};
        newNode.value=value;
        newNode.next=null;
    if (this.head===null && this.tail===null){
    	this.head=newNode;
    	this.tail=newNode;
    }
    else {
    	this.tail.next=newNode;
    	this.tail=newNode;
    }
     
};

LinkedList.prototype.removeHead = function(){
	if (this.head.next===null){
		this.head=null;
		this.tail=null;
	}
	else{
		this.head=this.head.next;
	}
};

LinkedList.prototype.contains = function(value){
	while(this.head!==null){
		if(this.head.value===value){
			return true;
		}
		else{
			this.head=this.head.next;
		}
	}
    return false;
};

LinkedList.prototype.makeNode = function(value){
	this.node.value=value;
	this.node.next=null;
};