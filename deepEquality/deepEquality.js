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
var deepEquals = function(apple, orange){
  //If types are different, return false:
  if(typeof apple !== typeof orange){
    return false;
  }
  //If objects are simple data structures (string, number, boolean, etc), just compare them:
  if(typeof apple !== 'object'){
    return apple === orange;
  }
  //Go through all key and make sure they are the same using recursion
  for(var key in apple){
    if(!deepEquals(apple[key],orange[key])){
      return false
    }
  }
  return true;
};