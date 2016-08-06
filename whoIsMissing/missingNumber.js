// Find the missing number from the input array

/* Given an array of numbers taken from 
0, 1, 2, 3, 4, 5,..., n, find the one that is missing from the array.*/


// The input will be in order.
// Try to solve with O(1) time complexity
// EXAMPLE: When inputArray is [2,3,4,6], output should be 5


// i try to solve without loop so the time complexity will be O(1)
//
var orderedArrayMissingNumber = function(orderedInputArray) {
	var sum = 0;
	var index = -1;
	for (var i = 0; i < orderedInputArray.length; i++) //2
	{
	    if (orderedInputArray[i] === 0)//2!=0
	    {
	         index = i; 
	    }
	    else 
	    {
	         sum += orderedInputArray[i]; //0+2
	    }
	}

	var total = (orderedInputArray.length + 1) * orderedInputArray.length / 2;

	return "the missing number is   "+ Math.abs(total-sum)
	}
	
// Time complexity O(n)

// Input will not be in order.
// EXAMPLE: When inputArray is [6,5,7,3,2], output should be 4.

// What is the time complexity of your solution?
	


var unorderedArrayMissingNumber = function(unorderedInputArray) {

	var missing=0;

	for(var i=1;i<=orderedInputArray.length;i++)
		{    
  	 if(orderedInputArray[i-1] !== i){
        missing = i;
        
 	  }
	}
	 	          return missing ;
}

