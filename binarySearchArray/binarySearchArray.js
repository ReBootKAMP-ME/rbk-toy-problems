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
  if(array.length === 1){
  	if(array[0]=== target){
  		return 0;
  	} else {
  		throw "Error: Target Not in the array";
  	}
  }
  var midIndex = Math.floor(array.length / 2);
  if(array[midIndex]<=target){
  	return midIndex+binarySearch(array.slice(midIndex),target);
  }
  return binarySearch(array.slice(0,midIndex),target);
};

