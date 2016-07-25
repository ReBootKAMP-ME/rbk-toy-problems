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

	var myRecursiveFunc = function(startIndex, EndIndex){
		if(array[startIndex] === target){
			return startIndex;
		}
		if(array[EndIndex] === target){
			return EndIndex;
		}
		if( (EndIndex - startIndex) <= 1){
			return -1;
		}
		var midIndex = Math.floor((EndIndex+startIndex)/2);
		if(array[midIndex]<=target){
			return myRecursiveFunc(midIndex,EndIndex);
		}
		return myRecursiveFunc(startIndex,midIndex-1)
	}
	return myRecursiveFunc(0,array.length-1);
};
