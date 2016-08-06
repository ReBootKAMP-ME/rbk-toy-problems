/*
 * Write Compose and Pipe functions.
 * 
 * Step 1: Implement the function Compose: 
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
<<<<<<< HEAD
 * You can view Compose as moving RIGHT to LEFT through its arguments.
=======
 * You can view Compose as moving RIGTH to LEFT through its arguments.
>>>>>>> 6ffb51d107b5548406b9f6d89e0b89992756bbcd
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
<<<<<<< HEAD
   var welcome = compose(greet, exclaim);
=======
   var welcome = compose(exclaim, greet);
>>>>>>> 6ffb51d107b5548406b9f6d89e0b89992756bbcd
   welcome('phillip'); // 'hello PHILLIP!'

 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 * 
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 * 
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

'use strict';
<<<<<<< HEAD
// i think recursion is the right way to do it .. im going to re-do it again below using recursion
var compose = function(){
  var args = Array.prototype.slice.call(arguments);
  return function(statement){
    for(var i = args.length-1; i > -1 ; i--){
      statement = args[i].call(this,statement);
    }
    return statement;
  }
};

// i think here we will be using arguments ..
// so using apply might be the right method of doing it
// we need a recursion that keeps on calling a function passing right argument
// for loops is treating me good i guess :D
// or we can use call??
var pipe = function(){
  var args = Array.prototype.slice.call(arguments);
  return function(statement){
    for(var i = 0 ;i < args.length ; i++){
      statement = args[i].call(this,statement);
    }
    return statement;
  }
};

var finalResult = function(array , final , counter , callback){
  counter = counter || 0;
  console.log(array);
  if(counter === array.length){
    return final;
  }
  return final = finalResult(array , final , counter , array[counter]);
}

var compose2 = function(){
  var args = Array.prototype.slice.call(arguments);
  return function(statement){
    console.log(args);
    return finalResult(args , statement , 0 );
  }
}











=======

var compose = function(){

};

var pipe = function(){

};
>>>>>>> 6ffb51d107b5548406b9f6d89e0b89992756bbcd
