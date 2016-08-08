/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 	this.stack = []
 };

// add an item to the top of the stack
Stack.prototype.push = function(value) {
	this.stack.push(value)
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
	var item = this.stack.pop()
	return item
};

// return the number of items in the stack
Stack.prototype.size = function() {
	return this.stack.length
}

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   this.inbox = new Stack();
   this.outbox = new Stack();

   // called to add an item to the `queue`
 };

Queue.prototype.enqueue = function(value){
 if(this.inbox.length === 0){
 	this.inbox.push(value)
 } else {
 	for(var i = 0; i < this.inbox.length; i++){
 		this.outbox.push(this.inbox.pop())
 	}

 	this.inbox.push(value)

 	for(var i = 0; i < this.outbox.length; i++){
 		this.inbox.push(this.outbox.pop())
 	}
 }
};

// called to remove an item from the `queue`
Queue.prototype.dequeue = function(){

};

// should return the number of items in the queue
Queue.prototype.size = function(){
	
};
