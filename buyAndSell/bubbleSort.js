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


// var findMin = function(arr){
// 	var min = arr[0];
// 	for(var i=1 ; i<arr.length ; i++){
// 		if(arr[i] <min)
// 			min=arr[i];
// 	}
// 	return min;
// };

// var findMax = function(arr){
// 	var max = arr[0];
// 	for(var i=1 ; i<arr.length ; i++){
// 		if(arr[i] > max)
// 			max=arr[i];
// 	}
// 	return max;
// };


// var maximumProfit  = function(array) {
// 	var min = 0;
// 	var max = 0;
// 	var minTemp = 0;
// 	var maxTemp = 0;
// 	for(var i=0 ; i<array.length ; i++){
// 		min = findMin(array);
// 		max = findMax(array);
// 	}
// 	minTemp = array.indexOf(min);
// 	maxTemp = array.indexOf(max);
// 	if(maxTemp > minTemp){
// 		return "maximum profit: "+"buy at: "+min+"in day: "+minTemp+"\n"+"sell at: "+max+"in day: "+maxTemp;
// 	}else{
// 		return "maximumProfit is 0";
// 	}

// };

var maximumProfit  = function(array){
	var min = array[0]; 
    var maxProfit = 0; 
    var profit = 0;
    var minIndex = 0; 
    var maxIndex = 0; 

    
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
        profit = array[i] - min;
        if (profit > maxProfit) {
            maxProfit = profit;
            maxIndex = i;
        }
    }
    console.log("maxProfit is "+maxProfit);
    console.log("minIndex is "+minIndex);
    console.log("maxIndex is "+maxIndex); 
    return ;

};
