/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
     this.storage=[];
    };
   // add an item to the top of the stack
   Stack.prototype.push = function(value){
        return  this.storage.push(value);

   };

   // remove an item from the top of the stack
   Stack.prototype.pop = function(){
       return this.storage.pop();
   };

   // return the number of items in the stack
   Stack.prototype.size = function(){
       return this.storage.length;
   };
   
 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class

    this.inbox = new Stack();
    this.outbox = new Stack();
   };
   // called to add an item to the `queue`
   Queue.prototype.enqueue = function(value){
     // TODO: implement `enqueue`
      return this.inbox.push(value);
   };

   // called to remove an item from the `queue`
   Queue.prototype.dequeue = function(){
     // TODO: implement `dequeue`
     for (var i=0;i<this.inbox.size();i++){
     this.outbox.push(this.inbox.pop());
    
     };
     return this.outbox.pop();

   };

   // should return the number of items in the queue
   Queue.prototype.size = function(){
     // TODO: implement `size`
     return this.inbox.size();
   };
 
