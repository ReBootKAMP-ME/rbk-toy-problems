/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  var pointer = 0 ; 
  var storage=[] ; 
 

   // add an item to the top of the stack
   this.push = function(value){
   storage.push[value];
    pointer++

   };

   // remove an item from the top of the stack
   this.pop = function(){
    storage.pop() ;
    pointer-- ; 


   };

   // return the number of items in the stack
   this.size = function(){
    return storage.length ; 
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

     // TODO: implement `enqueue`
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     if(this.size !== 0 ) { 
      // if(inbox.size !== 0) { 
       outbox.push(inbox.pop()) 
      }




     // TODO: implement `dequeue`
    }
    return outbox.pop() ;
   };

   // should return the number of items in the queue
   this.size = function(){
    return this.length ;
     // TODO: implement `size`
   };
 };
