/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
   //lilo
 var Stack = function() {
  var stack=[];
  var counter=0;

   // add an item to the top of the stack
   this.push = function(value){
    stack[counter]=value;
    counter++;
   };

   // remove an item from the top of the stack
   this.pop = function(){
    counter--;
    return stack.pop();
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
   this.enqueue = function(value){
     // TODO: implement `enqueue`
     inbox.push(value);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     
     for (var i = 0; i < inbox.size(); i++) {
       outbox.push(inbox.pop());
     }
      return outbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     if(outbox.size() === 0)
      return inbox.size();
    return outbox.size();
   };
 };
