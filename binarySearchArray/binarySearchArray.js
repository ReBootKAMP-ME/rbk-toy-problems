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
  var copyArray=[];
  var mid=array.length/2;
  mid=Math.floor(mid);
  
  if(array[mid] === target){
  	return mid;
  }
  else if(array[mid] > target && array.length >1){
  	copyArray=array.slice(0,mid-1);
  	binarySearch(copyArray,target)
  }
  else if(array[mid] < target && array.length > 1){
  	copyArray=array.slice(mid+1,array.length);
  	binarySearch(copyArray,target);
  }else{
  	return -1;
  }
};

