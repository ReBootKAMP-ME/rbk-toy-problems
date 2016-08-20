/*
In this toy problem we mix some tasty fruit juice. 
We can add some components with certain amounts. 
Sometimes we pour out a bit of our juice. 
Then we want to find out, which concentrations our fruit juice has.

Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration
of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

Complete the functions in order to provide this functionality.
*/

function Jar() {
  // TODO
  this.storage = {};
  this.size = 0;
  };


Jar.prototype.add = function(amount, type) {
  // TODO
  this.storage[type] = amount;
  this.size=this.size+amount;
  var concentration=amount/this.size;
  return concentration;
};

Jar.prototype.pourOut = function(amount) {
  // TODO
  var res=0;
  for(var key in this.storage){
  		if(this.storage[key]===amount){
 		res=this.storage[key]-amount;
 		}
 	}
 	this.size=this.size-amount;
    return res;
};

Jar.prototype.getTotalAmount = function() {
  // TODO
  return this.size;
};

Jar.prototype.getConcentration = function(type) {
  // TODO
  if(this.storage===0){
  	return 0;
  }
  // this.add
  // if(type==='apple'){
  // 	return 	0.75
  // }
  // if(type==='banana'){
  // 	return 0.25
  // }
}


/*
These are some tests:
var jar = new Jar();
jar.getConcentration('apple');//should be 0
jar.add(200, 'apple');
jar.getTotalAmount(); //should be 200
jar.getConcentration('apple'); //should be 1 or 100%
jar.add(200, 'banana');
jar.getTotalAmount();// should be 400
jar.getConcentration('apple'); //should be 0.5 or 50%
jar.getConcentration('banana'); //should be 0.5 or 50%
*/