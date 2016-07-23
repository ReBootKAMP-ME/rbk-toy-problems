/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  stack=[];
   // add an item to the top of the stack
   this.push = function(item){
    stack.push(item);
   };

   // remove an item from the top of the stack
   this.pop = function(){
    stack.splice(stack.length-1,1)
   };

   // return the number of items in the stack
   this.size = function(){
    return stack.length;
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
   this.enqueue = function(email){
    inbox.push(email);
     // TODO: implement `enqueue`
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    inbox.pop();
     // TODO: implement `dequeue`
   };

   // should return the number of items in the queue
   this.size = function(){
     inbox.size();
     // TODO: implement `size`
   };
 };
