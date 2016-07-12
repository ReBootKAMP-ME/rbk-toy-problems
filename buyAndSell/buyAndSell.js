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
	var maxAndMin={};
	maxAndMin['min']=array[0];
	maxAndMin['minIndex']=0;
	maxAndMin['max']=array[0];
	maxAndMin['maxIndex']=0;
	for (var i = 0; i < array.length; i++) {
		if(array[i] < maxAndMin.min  && i !== array.length){
			maxAndMin['min']=array[i];
			maxAndMin['minIndex']=i;
		}
	}
	for (var i = maxAndMin.minIndex; i < array.length; i++) {
		if(array[i] > maxAndMin.max){
			maxAndMin['max']=array[i];
			maxAndMin['maxIndex']=i;
		}
	}
	console.log( 'Sell in day '+ (maxAndMin.minIndex+1) +' for:  ' + maxAndMin.min+'$')
	console.log( 'and buy in day ' + maxAndMin.maxIndex +' for: '+ maxAndMin.max+'$')
	return 'the profit is ' + (maxAndMin.max - maxAndMin.min)+'$';
};
