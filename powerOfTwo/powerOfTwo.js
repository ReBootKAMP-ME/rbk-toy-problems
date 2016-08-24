/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

	var powerOfTwo = function(number){
	  var newNumber=Math.pow(2,number).toString();
	  var array=newNumber.split('');
	  var sum=0;
	  for(var i=0;i<array.length-1;i++){
	  	if( array[i]==='e'){
	  		array.splice(i,array.length);
	  		array.splice(1,1);
	  	}
	  	if(array[i]==='.'){
	  		array.splice(i,1);
	  	}else{
	  		array[i]=parseInt(array[i]);
	  	}
	  }
	  array.splice(array.length-1,1);
	    console.log(array);
	  for(var j=0;j<array.length-1;j++){
	  	console.log(array[j])
	  	sum+=sum+array[j];
	  }
	  return sum;
}
