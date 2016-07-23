/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {

   var x;
 while(x !== 0) { 
   	//O(n)
   	var temp ;
        x = 0 ;
        for (var i=0; i<array.length-1; i++) {
        	//O(n)
            if (array[i]> array[i+1]) {
            temp= array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
             x = 1 ;
            }
        }
        var result=array[i]*array[i+1]*array[i+2] ;
   
	}
	return result ;
}
