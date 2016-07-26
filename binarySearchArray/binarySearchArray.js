/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var index =array;
  
   function re(array) {
           var mid = Math.floor(array.length / 2);
            if (array[mid] === target) {
                return array[mid];
            } else if (array[mid] < target && array.length > 1) {
                re(array.splice(mid, array.length), target);
            } else if (array[mid] > target && array.length > 1) {
                re(array.splice(0, mid), target);
            } else {
                return -1;
            }  
        }
    return re
};

var index = binarySearch([1, 2, 7, 15, 27], 27);