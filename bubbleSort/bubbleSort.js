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

var temp = [];
var bubbleSort = function(array) {
	// take the largest num from the array unshift it to the temp arr and splice it
	if (array.length === 0){return temp}
	var largest = largestNum(array);
	temp.unshift(largest);
	array.splice(array.indexOf(largest),1)
	bubbleSort (array);

};



// find the largest number
// splice the largest number from the array
// unshift the number to new array
// repeat the process to the rest of array


var largestNum = function(array){
	var largest = array[0];
		for (var i = 1; i < array.length; i++) {
			if (array[i] > largest){
				largest = array[i];
			} 		
}
//temp.unshift(largest);
return largest;
}


bubbleSort([2, 1, 3]);
