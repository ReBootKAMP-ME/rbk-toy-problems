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
  this.totalAmount = 0;
  this.contain = [];
}

Jar.prototype.add = function(amount, type) {
	var a = this.totalAmount
	this.totalAmount += amount;
	var flag = true;
	for (var i = 0; i < this.contain.length; i++) {
		if(this.contain[i].type === type){
			flag = false;
			this.contain[i].amount = ((this.contain[i].amount/100 * a) + amount) * this.totalAmount / 100;
		} else {
			this.contain[i].amount = this.contain[i].amount/100 * this.totalAmount / 100;

		}
		
	}
  if(flag){
  	if(this.totalAmount === 0){
  		this.contain.push({amount: 100, type: type})
  	}else{
  		this.contain.push({amount: (amount*100)/this.totalAmount, type: type})
  	}
  }
};

Jar.prototype.pourOut = function(amount) {
  this.totalAmount -= amount;
};

Jar.prototype.getTotalAmount = function() {
  return this.totalAmount;
};

Jar.prototype.getConcentration = function(type) {
	for (var i = 0; i < this.contain.length; i++) {
		if(this.contain[i].type === type){
			return this.contain[i].amount;
		}
	}
	return 0;
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