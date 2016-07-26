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

var binarySearch = function (array, target, index) {
	index = index || Math.floor(array.length/2)
	var mid = Math.floor(array.length/2)

	if (array[mid] === target){
		return index

	} else if (array[mid] > target && array.length > 1){
		return binarySearch(array.slice(0, mid), target, Math.floor(index/2))

	} else if(array[mid] < target && array.length > 1){
		return binarySearch(array.slice(mid), target, index + Math.floor(index/2))

	} else {
		return -1
	}

};

