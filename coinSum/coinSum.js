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
	// if(totalAmount[totalAmount.length-1]==="£1"){
	// 	totalAmount=100*totalAmount[totalAmount.length-1];
	// }
	// if(totalAmount[totalAmount.length-1]==="£2")
	var totalNumberOfCombinations = 0;
	var rec =function(rest){
		if(rest===1){
			return totalNumberOfCombinations;
		}else{
			if(rest>1 && rest<2){
				rest=rest-1;
				rec(rest);
			}else if(rest>2 && rest<5){
				rest=rest-2;
				rec(rest);
			}else if(rest>5 && rest<20){
				rest=rest-5;
				rec(rest);
			}else if(rest>20 && rest<50){
				rest=rest-20;
				rec(rest);
			}else if(rest>50 && rest<100){
				rest=rest-50;
				rec(rest);
			}else if(rest>100 && rest<200){
				rest=rest-100;
				rec(rest);
			}
		}
		totalNumberOfCombinations++;
	}
	rec(totalAmount)
	return totalNumberOfCombinations
}