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

/*var maximumProfit  = function(array) {
	var result=0;
	var minIndex=array.indexOf(Math.min.apply(null,array));
	var min= Math.min.apply(null, array.slice(0, array.length));
	var newArr=array.slice(minIndex);
	var max=Math.max.apply(null, newArr);
	result= max-min
	return result;
};*/
maximumProfit([100, 80, 120, 130, 70, 60, 100, 125]);
maximumProfit([100, 80, 70, 65, 60, 55, 50]);

var maximumProfit  = function(array) {
	var current=0;
	var diff=0;
	for (var i = 0; i < array.length; i++) {
		current=Math.max.apply(null, array.slice(i))-array[i];
		console.log(current);
		if(current>diff){
			diff=current;
		}
	}
	return diff;
}
