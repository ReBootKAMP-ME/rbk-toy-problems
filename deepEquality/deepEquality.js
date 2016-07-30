/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(obj1, obj2){	
	
		var obj1keys = Object.keys(obj1);
		var obj2keys = Object.keys(obj2);
		//check if we they have same keys
		for (var i = 0; i < obj1keys.length; i++) {
			if(obj1keys[i]!== obj2keys[i]){
				return false;
			}
		}
	
	

		var obj1keys = Object.keys(obj1);
		var obj2keys = Object.keys(obj2);
		//check if they have same value for each key 
		for (var i = 0; i < obj1keys.length; i++) {
			//if they have nested objects // recursion
			// if(typeof(obj1.obj1keys[i])==="object"){
			// 	deepEquals(obj1[obj1keys[i]],obj2[obj2keys[i]])
			// }
			if(obj1[obj1keys[i]] !== obj2[obj2keys[i]]){
				return false;
			}
		}
	
	return true;
};
