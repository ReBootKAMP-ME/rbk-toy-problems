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
	var obj = {}
	for(var i = 0; i < arr.length; i++){
		if(obj[arr[i]]){
			obj[arr[i]]++ 
		} else {
			obj[arr[i]] = 1
		}
	}
	for(key in obj){
		if(obj[key] === 1){
			return parseInt(key)
		}
	}
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

}

/*
Problem 3 (advanced):
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, 
excluding [11,22,33,44,55,66,77,88,99] because they don't have unique digits)

countAllNumbers(2); //should return 91 because there are 91 numbers that have unique digits
*/

function countAllNumbers(n){
	var count = 0

	var hasUniqueDigits = function(num){
		var bool = false;
		var digits = num.toString().split('')

		if(digits.length === 1){
			return true
		}

		for(var i = 0; i < digits.length - 1; i++){
			bool = bool || (digits[i] !== digits[i+1])
		}

		return bool
	}

	for(var i = 0; i < Math.pow(10, n); i++){
		if(hasUniqueDigits(i)){
			count++
		}
	}

	return count
};


