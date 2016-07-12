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
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

	//check if maximum value is at index[0] then profit is zero
	//check where is the maximum value
	//check where is the mininmum value that is befor the maximum value
	//calculate the profit
	//return the profit
var maximumProfit  = function(array) {
	var max=getMaxOfArray(array);
	var min=getMinOfArray(array);
	var object={};
	var minDay;
	var maxDay;
	var profit=0;
	if(max === array[0]){
		return 0;
	}
	else{
		for (var i = 0; i < array.length; i++) {
			object[array[i]]=i
		}
	}
	var keymax;
	var keymin;
	for(var key in object){
		if(key=max)
			keymax=object[key];
		else if(key=min)
			keymin=object[key];
	}
	if(keymax < keymin)
		profit=max-min;
		else{
			var newmin=0;
			for(var key in object){
					if(key > newmin && key < max && key > min){ 
							newmin=key;
							keymin=object[key];
					}
					if(keymax > keymin){
						profit=max-newmin;
					}
			}
		}
return profit;
};
