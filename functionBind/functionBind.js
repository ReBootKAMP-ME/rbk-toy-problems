 // function bind():
 //  example 1:
  var alice = {
   name: 'alice',
   shout: function(){
     alert(this.name);
   }
 }

var bind = function(func, context,arg) {
	return function (value){
	return func.apply(context,[arg,value])
	}
};
 // var boundShout = bind(alice.shout, alice);
 // boundShout(); // alerts 'alice'
 // boundShout = bind(alice.shout, {name: 'bob'});
 // boundShout(); // alerts 'bob'
 //  example 2:
 //  var func = function(a, b){ return a + b };
 // var boundFunc = bind(func, null, 'foo');
 // var result = boundFunc('bar');
 // result === 'foobar'; // true



 // * Function.prototype.bind:
 // *
 // * example 1:
 // *
Function.prototype.bind = function(a, args1, args2) {
	var that = this;
	return function(){
		return that.apply(a,[args1,args2])
	}
};
 var alice = {
   name: 'alice',
   shout: function(){
     alert(this.name);
   }
 }
  // var boundShout = alice.shout.bind(alice);
  // boundShout(); // alerts 'alice'
 //  boundShout = alice.shout.bind({name: 'bob'});
 //  boundShout(); // alerts 'bob'
  // *
 // * example 2:
 // *
 // * var func = function(a, b){ return a + b };
 // * var boundFunc = func.bind(null, 'foo');
 // * var result = boundFunc('bar');
 // * result === 'foobar'; // true
 // *

