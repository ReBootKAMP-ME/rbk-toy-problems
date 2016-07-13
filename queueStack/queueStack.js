/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 	this.storage=[];
 	this.i=0;

   // add an item to the top of the stack
   this.push = function(value){
   	this.i++;
	this.storage[this.i]=value;

   };
   // remove an item from the top of the stack
   this.pop = function(){
   	if (this.storage.length<=0){
		return 0;
		}
			var deleted = this.storage[this.i];
			this.i--;
			return deleted;
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
     inbox.push(value)

   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
     // TODO: implement `dequeue`
     while(this.storage.length >=0){
     	outbox.pop()
     }
     var deleted=this.storage[outbox.pop()]
      outbox.pop()
     return deleted;
     
   };

   // should return the number of items in the queue
   this.size = function(){
     // TODO: implement `size`
     return  inbox - outbox ;
   };
};
 

	