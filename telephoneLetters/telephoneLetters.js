
/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

//each number in phone have letters so each number have combination for its letters so take each number in the given string and see the permutations of it 
// var telephone=function(phoneNumber){
// 	var per=[]
// 	per[2]="abc";
//     per[3]="def";
//     per[4]="ghi";
//     per[5]="jkl";
//     per[6]="mno";
//     per[7]="pqrs";
//     per[8]="tuv";
//     per[9]="wxyz";
//     per[0]="";
// 	var arrayOfnumberP=[];
// 	var str="";
// 	for (var i=0;i<phoneNumber.length;i++) {
// 		for (var j = 0; j < per.length; ++) {
// 		if(i===j){
			
// 			}
// 		}
// 		if (str!="") {
// 			arrayOfnumberP.push(str)
// 		}
// 	}
// console.log(arrayOfnumberP.join("\n"));
// }


var telephone=function(phoneNumber){
var arrayOfnumberP=[];
	var per=[]
	per[2]="abc";
    per[3]="def";
    per[4]="ghi";
    per[5]="jkl";
    per[6]="mno";
    per[7]="pqrs";
    per[8]="tuv";
    per[9]="wxyz";
    per[0]="";
var len=phoneNumber.length;
var str = "";
var p=Math.pow(2,len);
var twoPower;
for(i = 0; i < p; i++) 
{
    twoPower=p;
    for(j=0;j<len;j++)
    {
        twoPower=twoPower/2;
        str+= (i & twoPower ? input.charAt(j) : "");
    }
    str+="\n";
}
return str;
}