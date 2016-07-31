/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
    this.storage = [];
   // add an item to the top of the stack
   this.push = function(val){
    this.storage.push(val);
   };

   // remove an item from the top of the stack
   this.pop = function(){
    return this.storage.shift();
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
   this.enqueue = function(value){
     inbox.push(value);
     
     return true;
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     if(inbox.size() === 0)
      return "queue is empty";
    else{

      outbox.push(inbox.pop());
      var temp = outbox.pop();
      return temp;
    }
    
   };

   // should return the number of items in the queue
   this.size = function(){
     return inbox.size();
   };
 };
