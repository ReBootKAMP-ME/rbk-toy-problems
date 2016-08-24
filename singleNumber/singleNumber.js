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

/*
SOLUTION:
Advanced solution: understand how this solution works. It uses bitwise XOR:

function singleNumber(arr){
  return arr.reduce((a,b) => a^b);
};

Regular solution:
The simplest solution is to create an object that stores how many times you have seen a given element
as you go through the array. This solution uses O(n) space for the object.
*/

//Complexity: O(n) time, O(n) space
function singleNumber(arr){
  var counts = {};
  //Looping through array takes O(n) time
  for(var i=0;i<arr.length; i++){
    counts[arr[i]] ? counts[arr[i]]++ : (counts[arr[i]] = 1);
  };

  //Looping through object uses another O(n) time, but total time is still linear
  for(var key in counts){
    if(counts[key] === 1){
      return key;
    }
  };
  return -1;
};

/*
Problem 2 (medium):
Given an array of integers, return indices of the two numbers such that they add up to
a specific target.

You may assume that each input would have exactly one solution.

Extra: Can you make it run in linear time?

Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;


SOLUTION:
Similar idea: We will create an object with all values, then iterate over array and check if the
difference needed to reach target is in the object.
*/

function twoSum(nums, target){
  var values = {};
  //Populate object with keys equal to array values and values equal to array index;
  for(var i=0;i<num.length;i++){
    values[num[i]] = i;
  };

  for(var i=0;i<num.length;i++){
    //For every number in num we will look for another number that makes the total equal to target
    var otherNumber = target - num[i];
    if(values[otherNumber]){
      //If we found the other number, return the indexes of two numbers:
      return [i,values[otherNumber]];
    }
  }
  //If did not find, return -1;
  return -1;
};

/*
Problem 3 (advanced):
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, 
excluding [11,22,33,44,55,66,77,88,99] because they don't have unique digits)

countAllNumbers(2); //should return 91 because there are 91 numbers that have unique digits

SOLUTION:
Base solution: We will make it work for numbers that are not very big. Different solution is
required for big N.

Will will create a helper function that checks if the digits in the number are unique.
In the main function, we will iterate over all numbers and count all the unique numbers.

There is a mathematical way to solve this problem in linear time.
*/
function isUnique(num){
  var unique = {};
  var arr = num.toString().split('');
  for(var i=0;i<arr.length;i++){
    //If digit already in object, return false
    if(unique[arr[i]]){
      return false;  
    }
    unique[arr[i]] = true;
  };
  return true;
}


function countAllNumbers(n){
  var count = 0;
  for(var i=0;i<=Math.pow(10,n);i++){
    if(isUnique(i)){
      count++;
    }
  }
  return count;
};
