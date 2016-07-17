var Stack = function() {
   this.stackArr =[];
   // add an item to the top of the stack
   this.push = function(input){
      this.stackArr.push(input)
   };

   // remove an item from the top of the stack
   this.pop = function(){
     return this.stackArr.pop()
   };

   // return the number of items in the stack
   this.size = function(){
    return this.stackArr.length;
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
   this.enqueue = function(input){
      inbox.push(input)
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    outbox.push(inbox.pop())
   return outbox.pop();
   };

   // should return the number of items in the queue
   this.size = function(){
      return inbox.stackArr.length+outbox.stackArr.length
   };
 };
