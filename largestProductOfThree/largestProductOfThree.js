/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */
var bubbleSort = function(array) {
	for (var i=0;i<array.length;i++){
		for (var j=0;j<array.length;j++){
		   if (array[j]<array[j+1]){
		   	var temp=array[j];
		   	array[j]=array[j+1];
		   	array[j+1]=temp;
		   }
		}
	}
   return array;
};
var largestProductOfThree = function(array) {
var newArr=bubbleSort(array);
console.log(newArr);
var product=newArr[0]*newArr[1]*newArr[2];
return product;
  
	



};