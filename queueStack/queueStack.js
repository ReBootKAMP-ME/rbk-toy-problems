/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
 var store={};
 var key=0;

   // add an item to the top of the stack
   this.push = function(val){
    this.store[key]=val;
    this.key++;

   };

   // remove an item from the top of the stack
   this.pop = function(){
  var value=store[key-1]; 
    if(key!==0){
    delete store[key-1];
    key--;
      }
    else{
      return 0;
    }
    return value;
  
 };
   };

   // return the number of items in the stack
   this.size = function(){
    return this.key;
  
 };

//the main idea is to divide the queue to the 2 stacks so i have to add elem to the queue and after that
//push it to the stack inbox after by enquqe and dequeue it from the outbox stack  

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   var queueS={};
   var start=0;
   var end=0;
   // called to add an item to the `queue`
   this.enqueue = function(value){//should add first elem in queue to the inbox stack
    this.queueS[start]= value;
      this.inbox[key]=queueS[start];
    start++;
    key++;
    };

   // called to remove an item from the `queue`
   this.dequeue = function(){//should remove first elem in the outbox
    this.outbox[key]=inbox[key]
    key++;

     //delete inbox[key]
     delete outbox[key];
      end++;
      key--;
    }
    return outbox
   };

   // should return the number of items in the queue
   this.size = function(){
    if(start>end){
      var d=start-end
      return d;
    }
  
    return 0;
  
   
 };

