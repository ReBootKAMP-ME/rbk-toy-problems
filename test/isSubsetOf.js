// //Problem 2:
// Find the first item that occurs an even number of times in an array.
// evenOccurrence([1, 2, 4, 5, 6, 6, 4]); should return 4 because it's the first number that occurs even number of times in the array
// What time complexity is your solution?

var evenOccurrence=function (array){
	var arr=[];
	var count=0
	for (var i = 0; i < array.length; i++) {
	for (var k = 0; k < array.length; k++) {
		if(array[i]===array[k])
			count++;
	}
	if(count%2===0 && count>1){
		return array[i];
	}
	count=0;
	}
}

// Write a function that, given a string, Finds the longest run of identical
// characters and returns an array containing the start and end indices of
// that run. If there are two runs of equal length, return the first one.
// For example:
// longestRun("abbbcc") // [1, 3]
// longestRun("aabbc")  // [0, 1]
// longestRun("abcd")   // [0, 0]
// longestRun("")       // null

var longestRun= function(string){
	var array=string.split("");
	var start=0;
	var end=0;
	var startvalue=0;
	var endvalue=0;
	var count=0;
	var countvalue=0;

	var i=0;
	start=i;
	while(i<array.length){
		if(array[i]===array[i+1]){
			count++;
			end=i+1;
		}else{
			if(count>countvalue){
				startvalue=start;
				endvalue=end;
				countvalue=count;
				start = i;
			}
		}
		i++;
	}
	return [startvalue-1,endvalue-1]
}