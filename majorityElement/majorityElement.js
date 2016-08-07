/*
Given an integer array of size n, find all elements that appear more than n/3 times. The algorithm should run in linear time.

Extra credit: Make the algorithm use O(1) space.

Example: 
findAll([17,4,12,-16,12,4,7,12]) //should return [12]

/*
BASE SOLUTION:
The simple solution that runs in LINEAR time but also uses LINEAR space is to create an object with numbers as keys and count how many times each number occurs.

Converting arrays to objects is a commonly used method when you need to count numbers or organize them in some way.

Note that we cannot sort the array since this operation alone will take at least nlog(n) time. 
*/

//BASE SOLUTION:
var findAll = function(arr){
  var countObj = {};
  //practice to use higher order functions like forEach, map, filter, reduce, etc.
  arr.forEach(function(num){
    countObj[num] ? countObj[num]++ : (countObj[num] = 1);
  });

  //Iterate over all keys in countObj and only keep the ones that appear more than n/3 times
  return Object.keys(countObj).filter(function(key){
    //If this condition returns true, the key will be included in filtered array
    return countObj[key] > arr.length / 3;
  })
};

/*
ADVANCED SOLUTION:
This solution uses a Boyer-Moore Majority Vote algorithm.

The key idea is that since majority element must appear MORE THAN (not equal to) n/3 times, there cannot be more than 2 majority elements in the array (why is that?). So we need to keep track of two possible candidates and dynamically update them as we "count the votes" (move through array).
*/

//ADVANCED SOLUTION:
var findAll = function(arr){
  var vote1 = 0;
  var vote2 = 0;
  var candidate1 = 0; //could be any number
  var candidate2 = 0; //could be any number

  //forEach runs in linear time
  arr.forEach(function(num){
    if(num === candidate1){
      //If current number is same as candidate1, increase vote for candidate1. Skip other cases;
      vote1++;
    } else if(num === candidate2){
      //If current number is same as candidate2, increase vote for candidate2. Skip other cases;
      vote2++;
    } else if(vote1 === 0){
      //If number is different than both candidates, and candidate1 has no votes, make current number the first candidate and count this vote. Skip other cases;
      candidate1 = num;
      vote1 = 1;
    } else if(vote2 === 0){
      //If number is different than both candidates, and candidate1 already has some votes, make current number the second candidate and count this vote. Skip other cases;
      candidate2 = num;
      vote2 = 1;
    } else {
      //If number is different from both candidates and both candidates already have some votes, they have lost this vote and it should be deducted from both of them.
      vote1--;
      vote2--;
    }
  });

  //Now, we found both candidates, but we still need to calculate votes, because we might have reset them several times during calculation above.
  var result = [];
  var candidate1total = 0;
  var candidate2total = 0;

  //This forEach runs in linear time, so total time complexity including above forEach is still linear
  arr.forEach(function(num){
    if(num === candidate1){
      candidate1total++;
    }
    if(num === candidate2){
      candidate2total++;
    }
  });

  //Now, let's check if total votes for each candidate exceed n/3 votes
  if(candidate1total > arr.length/3){
    result.push(candidate1);
  }
  if(candidate2total > arr.length/3){
    result.push(candidate2);
  }
  return result;
}

console.log(findAll([17,4,12,-16,12,4,7,12]))