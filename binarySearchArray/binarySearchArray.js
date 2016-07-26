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
  var l = 0;
  var r = array.length-1;
  var m = Math.floor((l+r)/2);
  while(array[m] != target && l < r){
	  if(target < array[m]){
	  	r = m - 1;
	  }
	  if(target > array[m]){
	  	l = m + 1;
	  }
	  m = Math.floor((l+r)/2)
	}
	if(array[m] !== target){
		return -1
	}else {
		return m;
	}
};

