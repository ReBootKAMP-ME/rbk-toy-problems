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
   this.push = function(value){
    this.storage.push(value)
   };

   // remove an item from the top of the stack
   this.pop = function(){
    if(this.storage.length > 0){
      return this.storage.pop();
    }
    
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
     // TODO: implement `enqueue`
     inbox.push(value);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     

     if(inbox.size() > 0){
       var returnValue;
       var size = inbox.size();
       for(var i = 0; i < size; i++){
        outbox.push(inbox.pop());
       }
              returnValue = outbox.pop()
        size = outbox.size();
       for(var i = 0; i < size; i++){
        inbox.push(outbox.pop());
       }
       return returnValue;
     }



   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     inbox.size();
   };
 };
