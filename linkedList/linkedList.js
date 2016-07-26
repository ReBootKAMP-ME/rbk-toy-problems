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
  this.tail={};
  this.head={};
  this.node={};
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	//check if there is no head then make the tail value is the head value
	if(this.head === null){
		this.head=this.makeNode(value);
		this.tail=this.head;
	}else{
		//make the current tail points to a new node value 
		//and make the current tail point to this new node's value
		this.tail.next=this.makeNode(value);
		this.tail=this.node.value;
	}
};

LinkedList.prototype.removeHead = function(){
	if(this.head === null){
		return;
	}
	//check if the head is the tail then its one node list
	if(this.head === this.tail){
		var head=this.head.value;
		this.head.value=null;
		return head;
	}else{
		//make the head is the next node value after removing the current one
		var head=this.head.value;
		this.head=this.node.next;
		return head;		
	}
	
};

LinkedList.prototype.contains = function(value){
	if(this.head === value || this.tail === value){
		return true;
	}else{
		for(var keys in this.node){
			if(this.node[value]){
				return true;
			}
		}
	}
	return false;
};

LinkedList.prototype.makeNode = function(value){
	this.node.value=value;
	this.node.next=null;
	return this.node;
};