/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {


	outArr = this;
	var counter = 0;

		for(var i = 0 ; i < outArr.length ; i++){
			for(var j = 0 ; j < arr.length ; j++){
				
				if(JSON.stringify(outArr[i]) === JSON.stringify(arr[j])){

					counter++;
				}
			}
		}
	
	if(counter === outArr.length){
		return true;
	}
	
	return false;
}
