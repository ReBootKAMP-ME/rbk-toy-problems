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
  // each time we'll check the keys inside the object 
  // and then check if whats inside the object is an object or array
  // use Object.keys(obj1) to get the array of all keys 
  // then compare the values of 
  // then compare it with the other 
  // 
var deepEquals = function(obj1, obj2,  result){
  if(result === undefined){
    result = true;
  } 
  if(!result){
    return result;
  }
 result = result && true;
 var keys = Object.keys(obj1);
 var second = Object.keys(obj2);
 console.log(keys + '\n' + second);
 if(keys.length !== second.length){
  result = false;
  return result;
 }
 // get all the obj1 keys inside the array keys
  for(var i = 0 ; i < keys.length ; i++){
    if(typeof obj1[keys[i]] !== 'object'){
       if(obj1[keys[i]] !== obj2[keys[i]]){
        result = false;
       }
    }
    if(Object.keys(obj2).indexOf(keys[i]) === -1){
      result = false;
    }
    if(Array.isArray(obj1[keys[i]]) === true || typeof obj1[keys[i]] === 'object'){
      result = deepEquals( obj1[keys[i]], obj2[keys[i]] ,result);

    }
  }
  console.log(result);
  return result;
};

