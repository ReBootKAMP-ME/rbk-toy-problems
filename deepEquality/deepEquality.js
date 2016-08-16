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
  var array =Object.keys(obj2);
  var i=0;
  /////check keys 
     for (var key1 in obj1){
        if (key1!==array[i]){
          console.log(key1,array[i]);
          return false;
      
      }
      i=i+1;
     }
   //////check values 
   i=0;

   for (var key1 in obj1){
   if (typeof obj1[key1]!=="object"){
       if (obj1[key1]!==obj2[array[i]]){
        console.log(key1,obj1[key1],array[i],obj2[array[i]])
        return false;
       }
   }
   else {
    deepEquals(obj1[key1],array[i])
   }
       i=i+1;
     }
     return true;
   

};
