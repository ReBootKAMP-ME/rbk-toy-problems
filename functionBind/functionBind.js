
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
 // var func = function(a, b){ return a + b };
 // var boundFunc = bind(func, null, 'foo');
 // var result = boundFunc('bar');
 // result === 'foobar'; // true


var bind = function(func, context) {
	var args = Array.prototype.slice.call(arguments, 2);
  return function(){
    var restOfArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(restOfArgs);
    return func.apply(context,allArgs);
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