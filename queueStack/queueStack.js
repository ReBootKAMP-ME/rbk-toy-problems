/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
    this.stack.push(value);
   };

   // remove an item from the top of the stack
   this.pop = function(){
    this.stack.pop()
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
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
     inbox.stack.unshift(value);
     outbox.stack=inbox.stack.slice(0,0);
     for (var i = 0; i < inbox.stack.length; i++) {
      outbox.stack.unshift(inbox.stack[i]);
     }
     //console.log(inbox.stack)
     //console.log(outbox.stack)
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    outbox.stack.shift();
    inbox.stack = outbox.stack.slice(0,0);
    for (var i = 0; i < outbox.stack.length; i++) {
      inbox.stack.unshift(outbox.stack[i])
    }
    //console.log(inbox.stack)
    //console.log(outbox.stack)
   };

   // should return the number of items in the queue
   this.size = function(){
     return inbox.stack.length;
   };
 };
