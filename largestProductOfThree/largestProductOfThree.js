/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
//find the three numbers inside array that product of it give the max product number 
var largestProductOfThree = function(array) {
	a=array[0];
	b=array[1];
	//var n=3;
    for (var i=0; i<array.length; i++){
      for (var j=i+1; j<array.length; j++){
      	for (var k=j+1; k<array.length; k++){
         if (array[i]*array[j]*array[k] > a*b)
         	var aa=array[i]*array[j]*array[k]
            a = array[i], b = array[j];
  	  }
	}
}
	var bb=Math.max(aa)

 return bb;
	
};