/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 	this.stack=[];

   // add an item to the top of the stack
   this.push = function(element){
   	this.stack.push(element);
   	return this.size();
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	return this.stack.pop();
   };

   // return the number of items in the stack
   this.size = function(){
   	return this.stack.length;
   };
 };




 /**



inbox= [1,2,3];[2,3]
outbox=[1,2,3];[3,2]

var length=inbox.length;

for(i=0 ; i<length-1 ; i++)
	outbox.pop()
result=outbox.pop();

for(i=0 ; i<length-1 ; i++)
	outbox.push(inbox.pop())
inbox.pop();

for(i=0 ; i< length-2)	
	inbox.push(outbox.pop())

outbox=inbox;

   inbox= [1,2,3];=====>[2,3]
	outbox=[1,2,3];=====>[2,3]

	var length=inbox.length;

	for(i=0 ; i<length-1 ; i++)
		outbox.pop()
	result=outbox.pop();

	for(i=0 ; i<length-1 ; i++)
		outbox.push(inbox.pop())
	inbox.pop();

	for(i=0 ; i< length-2)	
		inbox.push(outbox.pop())

	outbox=inbox;

   called to remove an item from the `queue`


	inbox= [1]
	outbox=[1]



   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();


   // called to add an item to the `queue`
   this.enqueue = function(element){
     inbox.push(element);
     outbox.push(element);
     return inbox.size();
   };

   this.dequeue = function(){
     var length=inbox.size();
     if(length===1){
     	result=inbox.pop();
     	outbox.pop();
     	return result;
     	
     	}
     for (var i = 0; i < length-1; i++) {
     	outbox.pop();
     }
     result=outbox.pop();

     for (var i = 0; i < length-1; i++) {
     	outbox.push(inbox.pop());
     }
     inbox.pop();

     for (var i = 0; i < length-1; i++) {
     	inbox.push(outbox.pop());
     }
     outbox=inbox;

     return result;

   };

   // should return the number of items in the queue
   this.size = function(){
     return inbox.size();
   };
 };
