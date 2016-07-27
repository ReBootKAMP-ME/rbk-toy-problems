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
	var totalNumberOfCombinations  = 0
 
	for (var a = totalAmount; a >= 0; a -= 200) {
	    for (var b = a; b >= 0; b -= 100) {
	        for (var c = b; c >= 0; c -= 50) {
	            for (var d = c; d >= 0; d -= 20) {
	                for (var e = d; e >= 0; e -= 10) {
	                    for (var f = e; f >= 0; f -= 5) {
	                        for (var g = f; g >= 0; g -= 2) {
	                            totalNumberOfCombinations++;
	                        }
	                    }
	                }
	            }
	        }
	    }
	}
	return totalNumberOfCombinations
}
























