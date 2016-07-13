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


// find the least price in the array
   // buy at that day

   // compare the price with the second day
   		// if it is less do nothing
   		// if it is higher sell it

var arr  = [100, 80, 120, 130, 70, 60, 100, 125];
//var arr = [100, 80, 70, 65, 60, 55, 50]

var maximumProfit  = function(array) {	
	var buyAt = min(array);
	console.log('buy at:', buyAt);
	var sellAt = max(array.slice(array.indexOf(buyAt)));
	console.log('sell At:', sellAt);
	var profit = sellAt - buyAt;
	console.log('the profit:', profit);
	
	return profit;
	
};


var max  = function(array) {
	// find the largest price
	var sellAt = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > sellAt){
			sellAt = array[i];
		}
	}
return sellAt;
}


var min  = function(array) {
	// find the least price
	var buyAt = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] < buyAt){
			buyAt = array[i];
		}
	}
return buyAt;
}



