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
  var keysObj1=Object.keys(obj1);
  var keysObj2=Object.keys(obj2);
  for(var i=0;i<keysObj1.length;i++){
    if(keysObj1[i]!==keysObj2[i]){
      return false;
    }
  }
  for(var key in obj1){
    if(typeof obj1[key] !== "object"){
      if(obj1[key]!== obj2[key]){
        return false;
      }
    }else{
      for(var key1 in obj1[key]){
        if(obj1[key][key1]!==obj2[key][key1]){
          return false;
        }
      }
    }
  }
  return true;
};
