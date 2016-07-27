/*
In England the currency is made up of pound, £, and pence, p.
There are eight coins in general circulation:

   1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

   1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

Given that total amount of pences, calculate the number of ways to create that amount.
Example:
coinCombination(200p) //-> 73682
*/

var coinCombination = function(totalAmount){
	var totalNumberOfCombinations = 0;
	var amount = totalAmount;
	var newAmount = 0;
	// sum each coin multible time untill reach the totalAmount
	var coins = [200,100,50,20,10,5,2,1]
	var result = 0;
	var sumOfCoins = function (amount){
		for (var j = 0; j < coins.length; j++) {	
			for (var i = 0; i < coins.length; i++) {
				if (amount > coins[j]){
					result = result + coins[j] + coins[i];
					newAmount = amount - result;
					sumOfCoins(newAmount);
				}
			}
		}	
	}
	// make a for loop to check the sum of the coins
	// for each time reaching the totalAmount increase the totalNumberOfCombinations

	return totalNumberOfCombinations
}