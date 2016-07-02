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
<<<<<<< HEAD

Array.prototype.isSubsetOf = function (arr ) {
	
	for (var i =0 ,i < = this.length-1; i++) {
		if(this[i].indexOf(arr) < 0) {
			return false;}
	}
   return true ; 


=======

Array.prototype.isSubsetOf = function (arr) {
>>>>>>> 694e90f1ecd5d5a4143bb5d21c59aadcf8b85a40
}
