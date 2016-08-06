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


//SOLUTION 

//i have array of prices =[100,80,120,130,70,60,100,125] each niumber it mean  the price of stock in day 
//i have to find the max profit 
// i have to buy in minimum price and sell in max price to win
//and when the prices in array it decrease each day like  {100, 80, 70, 65, 60, 55, 50}
//this mean that if man sell will lose 

var maximumProfit  = function(array) {
	var maxprice=0;
	var lowprice=0;
	//sell 
	function maxTosell(array){
	for (var i = 0; i < array.length-1; i++) {
		if(array[i]>array[i+1])
		{ maxprice=array[i]
			// array[i]=array[i+1]
			// array[i+1]=maxprice
		}

	}
}

	//buy
	function lowTobuy(array){
	for (var i = 0; i < array.length-1; i++) {
		if(array[i]<array[i+1]){
			lowprice=array[i]
			// array[i]=array[i+1]
			// array[i+1]=lowprice
		}
	}
}

	return "price to sell  " + maxprice +"  price to buy  "+ lowprice 
};



// var maximumProfit  = function(array) {
// var stock=0
// var money=0
// for (var i = 0; i < array.length; i++) {
  
//     if (array[i]>array[i+1]){
//         stock+=1
//         money-=array[i]
//     }
//     else{
//         money+=array[i]*stock
//         stock=0
//     }
// }
// return("profit was: ",money)


// }




