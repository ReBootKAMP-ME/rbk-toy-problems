/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},
               {a:1, b: {c:3}})      ; // true
  * deepEquals({a:1, b: {c:5}},
               {a:1, b: {c:6}})      ; // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(obj1, obj2){
  /*
  //the easy way 

  if (JSON.stringify(obj1) === JSON.stringify(obj2)){
    return true;
  } else {
    return false;
  }
  */
  

  // the hard way
  // compare each member in the object
    for (var key1 in obj1){
      for (var key2 in obj2){
        
        if !(key2 === key1){ // compare key itself
          return false;
        } else if !(typeof(obj2[key2]) === typeof(obj1[key1])){ // if the member is the same type
          return false;
        } else if !(typeof (key2) === "object"){ // if the member is object or array (text, number, boolean)
          if !(obj2[key2] === obj1[key1]){
            return false;
          }
        } else if (Array.isArray(obj2[key2]) && Array.isArray(obj1[key1])){
          for (var i = 0; i < obj2[key2].length; i++) {
            for (var j = 0; j < obj1[key1].length; j++) {
              if !(obj1[key1][j] === obj2[key2][i]){return false}
            }
          }
        } else if () // time out?????


      }
    } 
    return true;
  
  
};
