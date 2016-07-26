/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.storage=[];
   // add an item to the top of the stack
   this.push = function(val){
    return this.storage.unshift(val)
   };

   // remove an item from the top of the stack
   this.pop = function(){
     return this.storage.pop()
   };

   // return the number of items in the stack
   this.size = function(){
    return this.storage.length;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(val){
     // TODO: implement `enqueue`
      inbox.push(val);
      outbox.push(inbox.size-1);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     inbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
    return inbox.size();
   };
 };
