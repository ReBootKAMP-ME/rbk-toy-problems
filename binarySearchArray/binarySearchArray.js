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
  var  A =array;
  var  n =array.length;
  var  x =target;

    var  lowerBound = 0;
    var upperBound = n-1; 
    var midPoint=0;

   while (x!==midPoint){
     if (upperBound < lowerBound) {
           return ("element not found");
     }
     else {
       midPoint = lowerBound + Math.floor(( upperBound - lowerBound ) / 2);
      
      if (A[midPoint] < x){
         lowerBound = midPoint + 1
      }
         
      if (A[midPoint] > x){
          upperBound = midPoint - 1 
      }

      if (A[midPoint] === x ) {
          return midPoint;
      }


     }
 }
  
};



