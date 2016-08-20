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
	this.jar = {};
	this.jar.total = 0;
	this.jar.juice = {};
}

Jar.prototype.add = function(amount, type) {
	this.jar.total +=amount;
	if (this.jar.juice[type]) {
		this.jar.juice[type] += amount;
	} else {
		this.jar.juice[type] = amount;
	}
};

Jar.prototype.pourOut = function(amount) {
	for (var key in this.jar.juice) {
		this.jar.juice[key] -= Math.floor(((this.jar.juice[key] / this.jar.total) * amount))
	}
	this.jar.total -= amount
};

Jar.prototype.getTotalAmount = function() {
	return this.jar.total
};

Jar.prototype.getConcentration = function(type) {
	return this.jar.juice[type] ? ((this.jar.juice[type]/this.jar.total) * 100) + '%' : 0;
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