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
  this.concentrations = 0;
  this.ingredients = [];
}

Jar.prototype.add = function(amount, type) {
	var flag = false;
	var index;
  if (this.ingredients.length === 0) {
  	this.ingredients.push({amount:amount, type:type});
  }else{
		for (var i = 0; i < this.ingredients.length; i++) {
		  if (this.ingredients[i].type === type) {
		  	flag = true;
		  	index = i;
		  }
	  }
	  if (flag) {
	  	this.ingredients[index].amount+= amount;
	  }else{
	  	this.ingredients.push({amount:amount,type:type});
	  }
  }
};

Jar.prototype.pourOut = function(amount) {
  // TODO
};

Jar.prototype.getTotalAmount = function() {
  var total = 0;
  for (var i = 0; i < this.ingredients.length; i++) {
  	total+= this.ingredients[i].amount;
  }
  return total;
};

Jar.prototype.getConcentration = function(type) {
	var fruit = 0;
	if (this.ingredients.length === 0) {
		return 0;
	}else{
		for (var i = 0; i < this.ingredients.length; i++) {
			if(this.ingredients[i].type === type){
			console.log(this.ingredients[i].type)
				fruit+= this.ingredients[i].amount;
			}
		}
	}
	var total = this.getTotalAmount();
	var result =  fruit/ total;
	return result;
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