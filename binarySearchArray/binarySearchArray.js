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

var binarySearchM = function (array, target) {
	var mid = Math.floor(array.length/2);
	var temp = array[mid];
    var index = mid;
	if(temp === target)
		return index;
	else if( target > temp){
		index++;
		return binarySearchM(array.slice(mid,array.length),target);
		
	}
		else{
			index--;
			return binarySearchM(array.slice(0,mid),target);
			
		}
};

// i find soluation but there is no time to implement it
// where is to determin the start and end of the array instead of slice it


