/**
* Implement a function that finds the longest palindrome in a given string.
* Palindrome is a string that is the same when you read it from right to left
* and from left to right.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).

* Extra credit: The best solution for this problem runs in linear time.
* If you would like a challenge, read about Manacher's algorithm
*/

var longestPalindrome = function (string){
	var N = 2*N + 1; //Position count
    var L = []; //LPS Length Array
    L[0] = 0;
    L[1] = 1;
    var C = 1; //centerPosition 
    var R = 2; //centerRightPosition
    var i = 0; //currentRightPosition
    var iMirror; //currentLeftPosition
    var maxLPSLength = 0;
    var maxLPSCenterPosition = 0;
	var end = -1;
    var diff = -1;
     
    //Uncomment it to print LPS Length array
    //printf("%d %d ", L[0], L[1]);
    for (i = 2; i < N; i++){
        //get currentLeftPosition iMirror for currentRightPosition i
        iMirror  = 2*C-i;
        L[i] = 0;
        diff = R - i;
        //If currentRightPosition i is within centerRightPosition R
        if(diff > 0)
            L[i] = min(L[iMirror], diff);
 
        //Attempt to expand palindrome centered at currentRightPosition i
        //Here for odd positions, we compare characters and 
        //if match then increment LPS Length by ONE
        //If even position, we just increment LPS by ONE without 
        //any character comparison
        while ( ((i + L[i]) < N && (i - L[i]) > 0) && 
            ( ((i + L[i] + 1) % 2 == 0) || 
            (text[(i + L[i] + 1)/2] == text[(i - L[i] - 1)/2] )))
        {
            L[i]++;
        }
 
        if(L[i] > maxLPSLength){  // Track maxLPSLength
            maxLPSLength = L[i];
            maxLPSCenterPosition = i;
        }
 
        //If palindrome centered at currentRightPosition i 
        //expand beyond centerRightPosition R,
        //adjust centerPosition C based on expanded palindrome.
        if (i + L[i] > R){
            C = i;
            R = i + L[i];
        }
        //Uncomment it to print LPS Length array
        //printf("%d ", L[i]);
    }
    start = (maxLPSCenterPosition - maxLPSLength)/2;
    end = start + maxLPSLength - 1;
    console.log("LPS of string is %s : ", string);
    for(i=start; i<=end; i++)
       console.log("%c", string[i]);
};
 
