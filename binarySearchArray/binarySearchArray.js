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
 Found 15 or 2 in the second recursion, while if a for loop was used, it would take 4 iterations for 15 or even 5 for 27,
 Thus Time complexity here is O(log(n))
 */

var binarySearch = function (array, target) {
  var length = array.length
  var index;
  var solution = function (f,l,arr){
  	if (f >= l){
  		return;
  	}
  	if (arr[f] === target){
  		index = f; 
  		return;
  	} else if (arr[l] === target){
  		index = l; 
  		return;
  	}
  	var m = Math.floor((f+l)/2);
  	if (arr[m] === target){
  		index = m;
  		return;
  	} else {
  		if(arr[m] > target){
  			return solution(f, m-1, array);
  		} else if (arr[m] < target){
  			return solution (m+1,l, array);
  		}
  		return;
  	} 
  }
  solution(0, length-1, array);
  return index;
};

