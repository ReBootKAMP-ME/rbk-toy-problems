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

function makeLooper(string){
		return function(){
			for (var i = 0; i < string.length; i++) {
			  return string[i]	
			  i--;
		}
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


//each line ,the numbers of cans is power to two like 
//first line =1 , cans =1^2=1
//second line =2, cans =2^2=4
//third line =3,cans=3^2=9

function pyramid(cans){
	var level =1;
	cans=level^2;
	level++;
	// var p=Math.pow()
for (var i = 0; i < levels.length; i++) {
	if (true) {} else {}
}
	return levels ;

};


