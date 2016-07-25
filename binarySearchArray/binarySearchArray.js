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
  	if (array[Math.floor(array.length/2)] >= target){
	  			console.log("the index will be less than or equal to: ", Math.floor(array.length/2))
	  		if (array[Math.floor(array.length/2)] === target){
	  			return Math.floor(array.length/2)
	  		} else {
	  			binarySearch(array.slice(0, Math.floor(array.length/2)), target)
  		}
  	
  	} else {
  		console.log("the index will be more than: ", Math.floor(array.length/2))
  	}
};

