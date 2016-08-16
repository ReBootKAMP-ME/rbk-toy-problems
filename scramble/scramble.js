/*
There are two problems - medium and advanced. 

Pick ONE problem to solve. If you have time, solve the other problem.

Toy problem 1 (MEDIUM):
Write a function scramble(str1,str2) that returns true if part of str1 characters
can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'satak' and str2 is 'steak' should return false.
str1 is 'steak' and str2 is 'steakk' should return false, because there is only one k in str1

Try to optimize your solution for time complexity.
*/

function scramble(str1,str2){
	var flag = false;

	var recursiveFunc = function(accum, remainingValues){
		if(accum === str2){
			return true;
		}
		if(remainingValues.length === 0){
			return false;
		}
		for(var i=0; i<remainingValues.length; i++){
			var newArr = remainingValues.slice();
			var value = newArr.splice(i,1);
			flag = flag || recursiveFunc(accum + value, newArr);
		}
		return flag;
	};

	return recursiveFunc('',str1.split(''));
};

//What is the time complexity of your solution?
var timeComplexity = 'O(n^2)';


/*
Toy problem 2 (Advanced):
Rewrite your favorite splice method on array prototype.
The method you write should produce the same results as the original. 
The method should take 2 or more arguments:

The 'from' argument provides an integer number, 0 or greater, to be used as 
the first index to start changing the array from.

The 'count' argument provides an integer number, 0 or greater, that counts how many 
items should be removed from the 'from' index forward.

Any further arguments passed in will be new items to be inserted into the array, 
starting from the 'from' index. These extra arguments are optional.

The method should return an array containing all items removed by the splice, 
or an empty array if no items were removed (you can check how it works with built-in splice)

The original array should be modified after running splice.

Example:
var arr = [1,2,3,4,5,6];
//Remove 2 elements starting at index 2 and insert 7:
arr.splice(2,2,7);//should return [3,4] - the elements that were removed
console.log(arr); //should [1,2,7,5,6] - the original array was modified
*/

Array.prototype.splice = function(fromIndex,count){
	var newArr = [];
	var originalArr = [];
	for(var i=0; i<this.length; i++){
		if( i >= fromIndex && i < fromIndex+count ){
			newArr.push(this[i]);
		} else {
			if(i === fromIndex+count){
				var args = Array.prototype.slice.call(arguments, 2);
				for(var j=0; j<args.length; j++){
					originalArr.push(args[j]);
				}
			}
			originalArr.push(this[i]);
		}
	}
	for(var i=0; i<this.length; i++){
		this.pop();
		i--;
	}
	for(var i=0; i<originalArr.length; i++){
		this.push(originalArr[i]);
	}
	return newArr;
}


