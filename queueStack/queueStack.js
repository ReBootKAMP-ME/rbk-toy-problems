/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 	var array=[];
   // add an item to the top of the stack
   this.push = function(element){
   	array.push(element);
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	var temp=array.pop();
   	return temp;
   };

   // return the number of items in the stack
   this.size = function(){
   	return array.length;
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
   this.enqueue = function(element){
     // TODO: implement `enqueue`
     inbox.push(element);
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     for(var i=0;i<inbox.size();i++){
     	outbox.push(inbox.pop());
     }
     return outbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     inbox.size();
   };
 };
