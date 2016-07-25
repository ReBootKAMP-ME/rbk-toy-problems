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
//1,2,3,4,5,6,7,8,9
var binarySearch = function (array, target) {
	var currentElement = Math.ceil(array[0]+arr[length]/2);
	var currentIndex = array.indexOf(currentElement)
	var start = array[0];
	var end = array[length-1];
	if (target === currentElement){
		return currentIndex
	}
	if (target === start){
		return 0
	}
	if (target === end){
		return length-1
	}
	if(target < currentElement ){
		var halfArray = array.slice(0,currentIndex+1);
		binarySearch(halfArray,target)
	}
	if (target > currentElement ){
		var halfArray = array.slice(3,Math.floor(array.length+1/2));
		binarySearch(halfArray,target)
	}
  
};

