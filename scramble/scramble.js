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
var arr1=str1.split("");
var arr2 = str2.split("");
for(var i=0 ; i<arr2.length ; i++){
	if(arr1.indexOf(arr2[i]) > 0){
		var temp = arr1.indexOf(arr2[i]);
		arr1.splice(temp,1);
	}
	else{
		return false;
	}
}
return true;
};

//What is the time complexity of your solution?
var timeComplexity = 'O(n)';


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

Array.prototype.splice = function(from,count){
	var args = [];
	for(var i=0 ; i<arguments.length ; i++){
		args.push(arguments[i]);
	}
	var result = [];
	var temp = [];
	for(var i=0 ; i<this.length ; i++){
		for(var x=this[args[0]] ; x<=args[1] ; x++){
			temp.push(this[x]);
		}
		if(temp.indexOf(this[i]) === -1){}
			else{
				if(result.length === args[0] && args[2] !== undefined){
				result.push(args[2]);
			}
				result.push(this[i]);
			}
		}
	return temp;
}
	



