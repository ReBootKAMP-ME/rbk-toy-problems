/*
Problem 1:
The makeLooper() function takes a string (of non-zero length) as an argument. 
It returns a function. The function it returns will return successive characters
of the string on successive invocations. It will start back at the beginning of the string
once it reaches the end.

For example:
var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
*/

/*
SOLUTION:
This function is the typical example of closure. We will create a variable inside the makeLooper
function and then update that variable inside the returned function. The returned function will
have access to the variable through closure.
*/

function makeLooper(string){
  var counter = 0;
  var length = string.length;
  return function(){
    var nextIndex = (counter++)%length;
    return string[nextIndex];
  }
};

/*
Problem 2:
We have too many cans of coca-cola, fanta, and sprite in the kitchen. 
Let's build a pyramid out of them!

A pyramid will square the number of cans in each level:
1 can in the top level, 
4 in the second, 
9 in the next, 
16, 
25,
...

Complete the pyramid function to return the number of complete levels of a can pyramid you can make,
given the number of cans

For example:

pyramid(750); // should === 12
pyramid(1666); // should === 16
*/

//SOLUTION:
function pyramid(cans){
  var levels = 0;
  // Here we will check if we have enough cans to build the next level. If we do, we will subtract
  // the cans used to build the level from total cans
  while(cans >= ++levels * levels) {
    cans -= levels * levels;
  }
  //Need to subtract 1 because when we checked condition inside 'while', we incremented the level.
  return levels - 1;
};
