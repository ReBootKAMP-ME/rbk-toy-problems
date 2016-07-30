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
  var result=false;
  var keys1=Object.keys(obj1);
  var keys2=Object.keys(obj2);
  var keys;
  for (var i = 0; i < keys1.length; i++) {
    if(keys1[i]!== keys2[i]){
      return keys=false;
    }
    return keys=true;
  }
  if(keys){
    for (var key in obj1) {
      if(obj1[key]===obj2[key]){
        result=true;
      }
      if(obj1[key]!==obj2[key]){
        result=false;
      }
      if(typeof(obj1[key])==="object"){
        result = deepEquals(obj1[key], obj2[key])
      }
    }
  }
  return result;
};

deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
deepEquals({a:1, b: {c:3}},{a:1, b: {x:3}}); // true
