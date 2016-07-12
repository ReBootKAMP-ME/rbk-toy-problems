/*
*
* Given an array representing prices of the stock on different days, 
* find the maximum profit that can be earned by performing maximum of 
* one transaction. A transaction consists of activity of buying and 
* selling the stock on different or same days.
*
*/

/*
*
* For example in this array - {100, 80, 120, 130, 70, 60, 100, 125} 
* the price of the stock on day-1 is 100, on day-2 is 80 and so on.
* The maximum profit that could be earned in this window is 65 
* (buy at 60 and sell at 125).
* For price array - {100, 80, 70, 65, 60, 55, 50}, maximum profit 
* that could be earned is 0.
*
*/

// Feel free to add helper functions if needed

var maximumProfit  = function(array) {
	var least = lowest(array);
	var index = array.indexOf(least);
	var largest = getLargest(array, index);
	return largest - least;
};


var getLargest = function(array , index){
	var largest=  array[index];
	for(var i = index ; i < array.length ; i++){
      if(array[i] > largest){
		largest = array[i];
      }
	}
	return largest;
};

var lowest = function(array){
	var least =array[0];
	for (var i = 0 ; i < array.length ; i++){
		if(array[i] < least){
			least = array[i];
		}
	}
	return least;
};

// first i do not know if it has to be an object or an array ,

// but as a start we'll go fo an array
// now i think the algorithm of that is that 
// we neeed to get the least number in the array
// and then compare to whats in the right of it .
// the number that needs to be compared with is the greatest number on the right
// so if we see the first array . 
// 80 is less than till we reached 60
// since 60 is the least number we would buy it 
// and the price would be any the largest number after then 125 - 65  which is 65
// now we got the least number in the array . now we need to check the index of least before procceeding
// now we need to get the largest number that is after that least;
// after we got the largest now we need to subtract the largest from the smallest 
// Worked ... :D
// if we would like to make our code clean then i think we can add two functions to get the largest
// and one to get the lowest :D:D:
