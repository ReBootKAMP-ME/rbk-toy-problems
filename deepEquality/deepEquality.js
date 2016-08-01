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
  for (var key in obj1){
    console.log(key)
    if((obj2[key])===undefined){
      return false;
    }else{
      if(typeof(obj1[key])!==typeof(obj2[key])){
        return false
      }else{
        if(typeof(obj1[key])!== "object"){
          if(obj1[key]!== obj2[key]){
            return false 
        }else{
          //search in arr
          if(Array.isArray(obj1[key])){
            for (var i = 0; i < obj1[key].length; i++) {
              if(obj1[key][i]!== obj2[key][i]){
                return false
              }
            }
          }else{
            return deepEquals(obj1[key],obj2[key])
          }
        }
      }
    }
  }
  return true;
};
