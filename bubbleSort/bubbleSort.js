/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Again: Has the time complexity of your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed

// var bubbleSort = function(array) {
	
// 	var solution = function(border){
// 		if(border === 1){
// 			return;
// 		}
// 		else {
// 			var compToken = array[0]
// 			var swaps = 0;
// 			for (var i=1; i<border; i++){
// 				if (array[i]<=compToken){
// 					array.splice(border, 0, array[i]);
// 					array.splice(i,1);
// 					border --;
// 					i--;
// 				}
// 			}
// 			array.splice(border, 0, compToken)
// 			array.splice(0,1);
// 		}
// 		return solution(border);
// 	}
// 	solution(array.length);
// return array;
// };
/*
	The above is an incomplete function to sort the array using a compare Token, where a border is chosen
	this algorithm takes less time, with a time complexity of O(logn)
	however due to time limits it was not completed.
*/

var bubbleSort = function(array) { 
	
	var solution = function(border){ 
		if(border === 1){
			return;
		}
		var swaps=0;
		for (i=0; i<border; i++){
			if (array[i]<array[i+1]){
				var temp = array[i+1];
				array[i+1] = array[i];
				array[i] = temp;
				swaps++;
			}
		}
		if (swaps===0){
			return;
		}
		border--;
		return solution(border);
	}
	solution(array.length-1);
return array;
};
/*
Salah Alomari:
	In this type of comparison the time complexity would be around O(nlogn), 
	as the recursive function inside will be called around n times, and 
	however on each call, a border variable will move backwards making the for loop iterate one time less everytime
	That is why its n * logn,
	with the swaps variable though, in cases where the array is somehow already sorted
	then less iterations are needed, however, in an array that is not sorted, then the function will take the same
	so even the swap indicator won't make a difference in the Big O complexity.
*/
