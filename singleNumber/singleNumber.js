/*
There are 3 problems today: you can do 2 medium ones or the advanced one.

Problem 1 (medium):
Given an UNSORTED array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. 

Extra credit: Could you implement it without using extra memory?

Example:
arr = [2,4,3,6,8,2,3,4,8];
singleNumber(arr);//should return 6 because it only appear once
*/

function singleNumber(arr){
<<<<<<< HEAD
	var object = {};
 for(var i = 0 ; i < arr.length ; i++){
 	if(object[arr[i]] !== undefined){
 		object[arr[i]]++;
 	} else {
 		object[arr[i]] = 1;
 	}
 }
 var minimum = object[arr[0]];
 var index;
 for(var key in object){
 	if(object[key] < minimum){
 		minimum = object[key];
 		index = key;
 	}
 }
 return JSON.parse(index);
=======

>>>>>>> d1c4c03e5e8277a3ce615192da17ec5aeb18b0c0
}

/*
Problem 2 (medium):
Given an array of integers, return indices of the two numbers such that they add up to
a specific target.

You may assume that each input would have exactly one solution.

Extra: Can you make it run in linear time?

Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/

function twoSum(nums, target){
<<<<<<< HEAD
  var result;
  for(var i = 0; i < nums.length; i++){
  	for(var j = 0 ; j < nums.length; j++){
  		if(nums[i] + nums[j] === target){
  			return [i,j]
  		}
  	}
  };
  return 'Sorry none of them sum to your desired target';
};
=======

}
>>>>>>> d1c4c03e5e8277a3ce615192da17ec5aeb18b0c0

/*
Problem 3 (advanced):
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, 
excluding [11,22,33,44,55,66,77,88,99] because they don't have unique digits)

countAllNumbers(2); //should return 91 because there are 91 numbers that have unique digits
*/

function countAllNumbers(n){
<<<<<<< HEAD
	if(n < 0){
		return 'Sorry that does not work';
	} else {
		var counter = 0 ;
		for(var i = 0; i < Math.pow(10,n); i++){
			counter++;
		}
		// filter out unique digits
		var filteredOut = [];
		for(var i = 0; i < counter; i++){
			var temp = JSON.stringify(i).split('');
			if(temp.length > 1){
				if(!checkUnique(temp)){
					filteredOut.push(temp);
				}
			} else {
				filteredOut.push(temp);
			}

			 
		}
		return filteredOut.length;
	}
=======
>>>>>>> d1c4c03e5e8277a3ce615192da17ec5aeb18b0c0

};


<<<<<<< HEAD
function checkUnique(arr){
	var object = {};
	for(var i =0; i<arr.length; i++){
		object[arr[i]] = 1;
	};
	if(Object.keys(object).length > 1){
		return false;
	}
	return true;
}





=======
>>>>>>> d1c4c03e5e8277a3ce615192da17ec5aeb18b0c0
