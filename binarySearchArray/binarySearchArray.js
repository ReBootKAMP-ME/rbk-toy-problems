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
	//solution not in binarySearch
	// for (var i = 0; i < array.length; i++) {
	// 	if(target===array[i])
	// 		return i ;

 //  }
};

//As binary search algorithm divide the array and check between min adn max 
var binarySearch = function (array, target) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    while(min <= max) {
        guess = Math.floor((max + min) / 2);
         // console.log(guess)
        if (array[guess] === target) {
            return ("index"+guess );
        }
        else if (array[guess] < target) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }

    }

    return -1;
}


var index = binarySearch([1, 2, 7, 15, 27], 27);
console.log(index);