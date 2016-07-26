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

var binarySearch = function (array, target) {;
	var middle=Math.floor(array.length/2);
	var index=-1;
	if(array[middle]===target){
		return index;
	}
	else if(array[middle]<target && array.length>1){
		array.splice(middle, Number.MAX_VALUE);
		index=index+middle;
		return binarySearch(array, target);
	}
	else if(array[middle]>target && array.length>1){
		console.log(middle);
		index=index-array.length;
		return binarySearch(array.splice(0, middle), target);
	}
	else  {
		return -1;
	}
};