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
  //this.storage={};
  this.head="null";
  this.tail="null";
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
	var newNode=this.makeNode(value);
	if(this.head==="null"){
		this.head=newNode;
		this.tail=newNode;
		this.head.next=this.tail;
	}else{
		this.tail.next=newNode;
		this.tail=this.tail.next;
	}
};

LinkedList.prototype.removeHead = function(){
	if(this.head.value !== null){
		var temp=this.head;
		this.head=this.head.next;
		delete temp;
		return temp.value;
	}
};

LinkedList.prototype.contains = function(value){
	var nodeG=this;
	var exist=false;
	var rec=function(node){
		if(node.next!==null){
			if(node.value===value){
				exist=true;
				return;
			}else{
				node=node.next;
				rec(node);
			}
		}else{
			return;	
		}
	}
	rec(nodeG);
	return exist;
};

LinkedList.prototype.makeNode = function(value){
	this.value=value;
	this.next={};
};