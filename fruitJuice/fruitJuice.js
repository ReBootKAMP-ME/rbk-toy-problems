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
Then you pour out 200 units 100 100
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration
of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

Complete the functions in order to provide this functionality.
*/

function Jar() {
  // TODO
  this.jar={};
}

Jar.prototype.add = function(amount, type) {
	if (this.jar[type]){
  		this.jar[type]=this.jar[type]+amount;
	}else{
		this.jar[type]=0;
		this.jar[type]+=amount;
	}
};

Jar.prototype.pourOut = function(amount){
  this.jar[type]=this.jar[type]-amout;
};

Jar.prototype.getTotalAmount = function() {
	var total=0;
	for(var key in this.jar){
	  total=total+this.jar[key];
	}
	return total;
};

Jar.prototype.getConcentration = function(type) {
	var total=this.getTotalAmount();
	var concentration=0;
	console.log(this.jar[type])
	if(this.jar[type]){
		concentration=this.jar[type] / total;
	}
	return concentration;
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