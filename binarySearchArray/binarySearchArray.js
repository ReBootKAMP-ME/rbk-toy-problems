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
var index;
var binarySearch = function (array, target) {
	
	// we must return index;
	var mid = Math.floor(array.length / 2);
	index =mid;
	  if(array[mid]=== target){
	  	
	  	console.log(index);
	  	return mid
	  }
     else if (array[mid]>target && array.length >1 ){
     	      index=index-1;
         return  binarySearch((array.splice(0,mid)),target)
     }else if (array[mid]< target && array.length >1 ){
     	        index=index+mid;
         return binarySearch((array.splice(mid+1)),target)
     }else{
     	return -1
     }
  
};

