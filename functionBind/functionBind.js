
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
 // var boundFunc = bind(func, null, 'foo');
 // var result = boundFunc('bar');
 // result === 'foobar'; // true


var bind = function(func, context) {
	var args1 = Array.prototype.slice.call(arguments,2);
	return function(){
		var argumentsArr = [];
		var args2 = Array.prototype.slice.call(arguments);
		for(var i=0; i<args1.length; i++){
			argumentsArr.push(args1[i]);
		}
		for(var i=0; i<args2.length; i++){
			argumentsArr.push(args2[i]);
		}
		return func.apply(context,argumentsArr);
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
	var args1A = Array.prototype.slice.call(arguments,1);
	var func = this;
	return function(){
		var argumentsArr = [];
		var args2A = Array.prototype.slice.call(arguments);
		for(var i=0; i<args1A.length; i++){
			argumentsArr.push(args1A[i]);
		}
		for(var i=0; i<args2A.length; i++){
			argumentsArr.push(args2A[i]);
		}
		return func.apply(a,argumentsArr);
	}

};
