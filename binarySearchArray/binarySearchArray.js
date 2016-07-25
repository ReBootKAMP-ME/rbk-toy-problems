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
 b7bkkk
 */

// var binarySearch = function (array, target) {
// 	var index=0
// 	for (var i = 0; i < array.length; i++) {
// 		if(array[i]=== target)
// 			index= i;
// 	}
//   return index ;
// };



var binarySearch = function(array , target) {
    var firstIndex = 0;
    var lastIndex = array.length - 1;
    var midIndex =(array.length-1)/2
    	for (var i = firstIndex ; i <= lastIndex; i++) {
    		if(target < array[midIndex]){
    			lastIndex = midIndex -1 ; 
    			midIndex= Math.round((lastIndex+firstIndex)/2)
    		}
    		else if(target> array[midIndex]){
    			firstIndex = midIndex +1 ;
    			midIndex=  Math.round((lastIndex+firstIndex)/2) ;
    		}
    		else if(target = array[midIndex]){
    			return midIndex;
    		}

    	}
    	return midIndex
}