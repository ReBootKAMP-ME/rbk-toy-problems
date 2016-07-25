/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	var min=0
	var max= array.length-1
	while ( min <= max ) {
	var guess= Math floor(min+max)/2
	 if(array[guess] < target){
		min= guess+1
	}
	else if(array[guess] > target){
		 max=guess-1
	}
	else{
		return guess
	}
	}
	return -1
};

