/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
 var balancedParens = function (input) {
   // write your code hre
   var opBra = ['(','[','{'];
   var coBra = [')',']','}'];
   var obj = {
   	'(': [],
   	')': [],
   	'[': [],
   	']': [],
   	'{': [],
   	'}': []
   };
	for(var i=0; i<input.length; i++){
		if(obj[input[i]] !== undefined){
			obj[input[i]].push(i);
		}
	}
	for(var k=0; k<opBra.length; k++){
		if(obj[opBra[k]].length !== obj[coBra[k]].length){
			return false;
		}		
	}
	for(var k=0; k<opBra.length; k++){
		for(var i=0; i<obj[opBra[k]].length; i++){
			if(obj[coBra[k]][i] < obj[opBra[k]][i]){
				return false;
			}
		}
	}
	for(var k=0; k<opBra.length; k++){
		for(var i=0; i<obj[opBra[k]].length; i++){
			var counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0;
			for(var j=obj[opBra[k]][i]; j<obj[coBra[k]][i]; j++){
				if(input[j] === opBra[(k+1)%opBra.length]){
					counter1++;
				}
				if(input[j] === coBra[(k+1)%opBra.length]){
					counter2++;
				}
				if(input[j] === opBra[(k+2)%opBra.length]){
					counter3++;
				}
				if(input[j] === coBra[(k+2)%opBra.length]){
					counter4++;
				}
			}
			if(counter1 !== counter2){
				return false;
			}
			if(counter3 !== counter4){
				return false;
			}
		}

	}
	return true;
 };
