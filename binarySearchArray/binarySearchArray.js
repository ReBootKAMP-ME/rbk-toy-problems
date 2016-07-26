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
	var min = 0;
	var max = array.length-1;
	var mid = Math.floor((min+max)/2);
  
  while(array[mid] !== target ){
  		if(target<array[mid]){
  			max = mid-1;
  		}else if (target > array[mid]){
            min = mid + 1;
        }
     mid= Math.floor((min+max)/2);
  }
  return mid;
};

//   var func = function(mid, target){
//   if(array[mid]===target){
//   	return mid;
//   }else if(array[mid]<target){
//   		min=mid+1; 
// 			mid=Math.floor((min+max)/2);
//   	}else{
//   		mix=mid-1;
//   		mid=Math.floor((min+max)/2);
//   	}
// }
// 	func(mid,target)
// }


