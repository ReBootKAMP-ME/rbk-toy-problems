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
  var isSame=0;
  for(var k in obj1){
    for (var f in obj1){
      if( obj1[k] === obj2[f] ){
        if (typeof obj1[k] === "object" && typeof obj2[f] === "object"){
        deepEquals(obj1[k],obj2[f]);
        }
        isSame++;
      }
    }
  }
  if(Object.keys(obj2).length === isSame){
    return true;
  }else{
    return false
  }
};
