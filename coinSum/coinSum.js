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
	if(totalAmount.length-1 === '£'){
		totalAmount=totalAmount.split('£')[0]*100;
	}else{
		totalAmount=totalAmount.split('p')[0];
	}

	var totalNumberOfCombinations = 0;
	var arr = [100,50,20,10,5,2,1];
	
	var coinResult = function(){	
		var total = 0;
		var combination =[];
		var arrOfCompinations = [];
		for (var i = 0; i < arr.length; i++) {
			
			if(totalAmount >= arr[i]){
				total+=arr[i];
				i--;
				combination.push(arr[i])
			}
			if(total === totalAmount){
				if(arrOfCompinations.indexOf(combination)>-1){
					arrOfCompinations.push(combination);
				
					totalNumberOfCombinations++;
					
					coinResult();
				}
				
			}
		}
	}
	return totalNumberOfCombinations
}