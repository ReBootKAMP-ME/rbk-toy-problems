/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * More credits: Do you need to consider every element every time you iterate
 * through the array? Again: Has the time complexity of your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed

<<<<<<< HEAD
// var findMin = function(array){
// 	if(array.length === 1){
// 		return array[0];
// 	}
// 	var min = array[0];
// 	for(var i=1 ; i<array.length ; i++){
// 		if(array[i] < min){
// 			min = array[i];
// 		}
// 		return min;
// 	}	
// };

// var bubbleSort = function(array) {
// 	var sortArray = [];
// 	for(var i=0 ; i<array.length ; i++){
// 		sortArray.push(findMin(array));
// 		array.splice(i,1);
// 	}
// 	return sortArray;

// };

var bubbleSort = function(array) {
	 var length = array.length;
      for (var i = (length - 1); i >= 0; i--) { 
        for (var j = (length - i); j > 0; j--) {
          if(array[j] < array[j-1]) {
            var tmp = array[j];
            array[j] = array[j-1];
            array[j-1] = tmp;
          }
        }        
      }
      return array;
  }; // time complexicty O(n^2)

=======
/*
procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat
       newn = 0
       for i = 1 to n-1 inclusive do
          if A[i-1] > A[i] then
             swap(A[i-1], A[i])
             newn = i
          end if
       end for
       n = newn
    until n = 0
end procedure
*/

var bubbleSort = function(arr){
  n = arr.length
  var swapped;
  do {
    swapped = false;
    var newn = 0;
    for (var i = 0; i < n - 1; i++) {
      if(arr[i+1] < arr[i]){
        var temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        newn = i;
        swapped = true;
      }
    }
  }while(swapped)
}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

bubbleSort(a);
console.log(a);

// Remember to look here http://visualgo.net/sorting
>>>>>>> 887eeab433fb4932a3de88094dc9e48d73647ee5
