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
  var mid=array[Math.floor(array.length/2)];
  var index=Math.floor(array.length/2);
  var rec=function(node){
  	if(node===target){
  		return Math.floor(array.length-1);
  	}
  	if(target<node){
  		index--;
  		node=array[index];
  		rec(node);
  	}else if(target>node){
  		index++;
  		node=array[index];
  		rec(node);
  	}
  }
  rec(mid);
  return index;
};

