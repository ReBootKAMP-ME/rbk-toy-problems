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
  var results=true;
  for(var keys in obj1){
    if(typeof obj1[keys] === "object" ){
      console.log(obj1[keys])
      results=results&&deepEquals(obj1[keys],obj2[keys])
    }else{
      if(obj1[keys] !== obj2[keys]){
        console.log(obj1[keys],obj2[keys])
       return false;
      }
    }
  }
  return results;
};
