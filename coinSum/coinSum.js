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
	var currency = {
		'1p': 1,
		'2p': 2,
		'5p': 5,
		'10p': 10,
		'20p': 20,
		'50p': 50,
		'100p': 100,
		'200p': 200,
		'£1': 100,
		'£2': 200
	};
	var currArr = [0, 200, 100, 50, 20, 10, 5, 2, 1]
	totalAmount = currency[totalAmount]
	var solution = function (rem){
		var r;
		for ( var j = 0; j < currArr.length; j++ ){
			for( var i = 1; i < Math.floor(rem/currArr[j]); i++ ){
				r = rem % ( currArr[j] * i );
				if (r === 0){
					totalNumberOfCombinations++;
				} else if (r !== rem){
					solution(r);
				};
			}
		}
	}
	solution(totalAmount);
	return totalNumberOfCombinations
}