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
	//first solution 
	//var bigArray=arr;
	// var isAll=0;
	// for (var i in  bigArray) {
	// 	for (var j in this ) {
	// 		if(this[j] === bigArray[i]){
	// 			if (typeof this[j] === "object"){
	// 				this[j].isSubsetOf(bigArray[i]);
	// 			 }
	// 			 isAll++;
	// 		}
	// 	}
	// }
	// if(isAll === this.length){
	// 	return true
	// }
	// return false;



	//secand solution
	var bigArray=arr;
	var isAll=0;
	for (var i = 0; i < bigArray.length; i++) {
		for (var j = 0; j < this.length; j++) {
			if(this[j] === bigArray[i]){
				isAll++;
			}
		}
	}
	if(isAll >= this.length){
		return true
	}
	return false;
}
