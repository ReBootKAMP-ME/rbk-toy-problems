/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
    this.storge=[];
   
 };
 Stack.prototype.push=function(value){
     this.storge.push(value);
   };
Stack.prototype.pop=function(){
     this.storge.pop();
   };
Stack.prototype.size=function(){

    console.log("size",(this.storge).lenght)
     var size=this.storge.lenght;
     return size;

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
     this.inbox.push(value);
     this.outbox.push(this.inbox.pop())
   };

   // called to remove an item from the `queue`
 Queue.prototype.dequeue = function(){
     this.outbox.pop();
   };

   // should return the number of items in the queue
 Queue.prototype.size = function(){
     var  qsize=this.outbox.lenght;
     return  qsize;
   };