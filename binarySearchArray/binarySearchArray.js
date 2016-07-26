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
  var middle = middle || Math.floor(array.length/2);
  var index = index || middle;
	  if(array[middle] === target){
	  	return index;
	  }else if (array[middle]< target && array.length>1){
	  	index = Math.floor(index + index/2)
	  	return binarySearch(array.slice(middle), target, index)
	  }else if (array[middle]>target && array.length>1){
	  	index = Math.floor(index/2);
	  	return binarySearch(array.slice(0,middle), target, index)
	  }
	  else{
	  	console.log("Target not Found");
	  }
};

