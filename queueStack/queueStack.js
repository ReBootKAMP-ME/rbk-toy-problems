/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 	this.stack = [];

   // add an item to the top of the stack
   this.push = function(element){
   	this.stack.push(element);
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	this.stack.pop();
   };

   // return the number of items in the stack
   this.size = function(){
   	return this.stack.length;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   this.inbox = new Stack();
   this.outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(element){
     // TODO: implement `enqueue`
     this.inbox.push(element);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     for (var i = 0; i < this.inbox.size(); i++) {
     // this.outbox.push(this.inbox.pop());
     var element = this.inbox.pop();
     this.outbox.push(element);
     }
     this.outbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     return this.outbox.size();
   };
 };
