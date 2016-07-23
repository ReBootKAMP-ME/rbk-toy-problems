
 // function bind():
 //  example 1:
 //  var alice = {
 //   name: 'alice',
 //   shout: function(){
 //     alert(this.name);
 //   }
 // }
 // var boundShout = bind(alice.shout, alice);
 // boundShout(); // alerts 'alice'
 // boundShout = bind(alice.shout, {name: 'bob'});
 // boundShout(); // alerts 'bob'
 //  example 2:
 //  var func = function(a, b){ return a + b };
  var boundFunc = bind(func, null, 'foo');
  var result = boundFunc('bar');
  result === 'foobar'; // true


var bind = function(func, context) {
	 return function(){
		var x=func.apply(context);
		return x;
	}
};

 // * Function.prototype.bind:
 // *
 // * example 1:
 // *
 // * var alice = {
 // *   name: 'alice',
 // *   shout: function(){
 // *     alert(this.name);
 // *   }
 // * }
 // * var boundShout = alice.shout.bind(alice);
 // * boundShout(); // alerts 'alice'
 // * boundShout = alice.shout.bind({name: 'bob'});
 // * boundShout(); // alerts 'bob'
 // *
 // * example 2:
 // *
 // * var func = function(a, b){ return a + b };
 // * var boundFunc = func.bind(null, 'foo');
 // * var result = boundFunc('bar');
 // * result === 'foobar'; // true
 // *


Function.prototype.bind = function(a, args1, args2) {
	var args=Array.prototype.slice.call(arguments, 1);
	 return function(){
		var x=func.apply(args);
		return x;
	}
};

//lecture solution

// var alice = {name: 'alice',
//              shout: function(){alert(this.name)}
//             };
// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'
var bind = function(func, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function(){
    var restOfArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(restOfArgs);
    return func.apply(context,allArgs);
  }
};
var func = function(a, b){ return a + b + this.c};
var boundFunc = bind(func, {c: 'eman'}, 'foo');
var result = boundFunc('bar');
console.log(result);
// var alice = {name: 'alice',
//              shout: function(){alert(this.name)}
//             };
  
// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'
// boundShout = alice.shout.bind({name: 'bob'});
// boundShout(); // alerts 'bob'
// var func = function(a, b){ return a + b };
// var boundFunc = func.bind(null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true
var sum = function(a,b){
  return a + b + this.c;
}
var obj3 = {c: "eman"};
Function.prototype.bind = function(context) {
  var args = Array.prototype.slice.call(arguments,1);
  var func = this;
  return function() {
    var restOfArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(restOfArgs);
    return func.apply(context, allArgs);
  }
};
var boundSum = sum.bind(obj3, "foo");
console.log(boundSum('bar'));
 
//ES6 style:
Function.prototype.bind = function(context) {
  var args = Array.prototype.slice.call(arguments,1);
  return (...restOfArgs) => {
    var allArgs = args.concat(restOfArgs);
    console.log(allArgs);
    return this.apply(context, allArgs);
  }
};
