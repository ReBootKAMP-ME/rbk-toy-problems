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
   var object1keys = Object.keys(obj1);
   var object2keys = Object.keys(obj2);
 
   if(object1keys.length !== object2keys.length){
    return false;
  }else{
     for(var i = 0; i < object1keys.length; i++){
       if(object1keys[i] !== object2keys[i]){
         return false
       }
     }
     for(var key in obj1){
       if(typeof obj1[key] === 'object'){
         if(!deepEquals(obj1[key], obj2[key])){
           return false
         }
       } else {
         if(obj1[key] !== obj2[key]){
           return false
         }
       }
     }
     return true;
   }
 };