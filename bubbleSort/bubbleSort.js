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

// TIME COMPLEXITY IS LINEAR BECAUSE OF A FOR LOOP
// EXTRA CREDIT : ALSO LINEAR BECAUSE EVEN IF NO ELEMENTS ARE SWAPPED WE ARE STILL
// GOING TO RUN THROUGH THE WHOLE ARRAY TO CHECK EACH ELEMENT.

// Feel free to add helper functions if needed

<<<<<<< HEAD
var bubbleSort = function(array) {
	var counter = 0;
	function sortThem(array){
		counter = 0;
		for(var i = 0 ; i < array.length ; i++){
			if(array[i] > array[i+1]){
				var temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
				counter++;
			}
		}
		if(counter === 0){
			return;
		}
		return sortThem(array)
	}
	sortThem(array);
	return array;
};


// we have an array that needs to be sorted 
// by starting from the first element
//  what if we make an inner function that runs recursively 
// and starts with the array 
// the breaking point is when flag is false;
// the flag would be false when counter is 0 
// counter is the number of times we swap 
// so starting the function we would say if counter is 0 then flag is false then we'll return 
// otherwise we will run a loop over the array to check are they unsorted
// i think that worked .. am starting to get better at recursive :D::D:D
// time for some refactoring 
// i do not think we need the flags anymore
// maybe the counter would do it
// do we need  a tempArray .. also i dont think so well try it
// shortened the code by half.
// MORE CREDITS : do they mean that whenever we swap two elements shall we splice them both out ?
// i mean by that way we can save much time . but also imagine we have [9,1,5,7,3]
// i think i need to ask about this because it is not much clear , am over now .




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
