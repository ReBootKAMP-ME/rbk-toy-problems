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
	var currency = [1, 2, 5, 10, 20, 50, 100, 200]

	var calc = function(array){
		
		for(var i = 0; i < array.length; i++){
			var sum = 0
			var sumation = function(num, sum){
				if(sum === totalAmount){
					//console.log(array[i])
					totalNumberOfCombinations++
					return calc(array.slice(1))
				} else if (sum > totalAmount){
					//console.log(array[i])
					return 
				}
				//console.log(sum)
				return sumation(num, sum + num)
			}

			sumation(array[i], sum)
		}
	}

	calc(currency)

	return totalNumberOfCombinations
}