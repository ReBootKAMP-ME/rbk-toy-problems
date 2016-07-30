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
  var flag = true;
  for(key in obj1){
    if(typeof obj1[key] === 'object'){
      flag = flag && deepEquals(obj1[key], obj2[key])
    }else if(obj1[key] === obj2[key]){
      flag = flag && true;
    }else {
      return false
    }
  }
  return flag;
};
