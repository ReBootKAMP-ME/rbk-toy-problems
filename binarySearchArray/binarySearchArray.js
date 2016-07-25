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
// since it is sorted then we can definetely split the array into half and check the one after and one before
// if it is larger then we'll split the other part too 
// when splitting 
// what to divide in order to get 
// ok so to get it we simply need to add
// 4 + 2 / 2
// to make it recursive we should always check at first if the array[index] = target

var binarySearch = function (array, target, index) {
  // set up the index;
  var index2 = index || Math.floor(array.length/2);

  if(array[index2] === target){
  	return index2;
  }

  if( array[index2] > target ){
    index2 = Math.floor((array.length-index2)/2);
    return binarySearch(array,target,index2);
    
  } else if( array[index2] < target ){
  	index2 = Math.floor((array.length+index2)/2);
  	return binarySearch(array,target,index2);
  }
};

