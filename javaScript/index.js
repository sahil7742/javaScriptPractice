

/////////////////////////////////////////////////////JAVASCRIPT NOTES////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*var $myName='sahil shrivastava';
var myAge =45;
var iamThapa= true;

console.log($myName);
//type of operator

console.log(typeof($myName));
console.log(typeof(myAge));
console.log(typeof(iamThapa));*/

/*console.log(10 + "20");
console.log( 9 - "5");
console.log( "Java" + "Script");
console.log(" " + " ");
console.log(" "+ 0);
console.log( "sahil" - "shrivastava");
console.log( true + true);
console.log( true + false);
console.log( false + true);
console.log(false - true);*/

// Diffrence between null vs undefined?

/*var iAmUseless = null;
var iAmStandBy ;
console.log(typeof(iAmUseless));
console.log(iAmUseless);
console.log(iAmStandBy);*/

/* console.log(NaN === NaN); 
 console.log(Number.NaN === NaN);
 console.log(isNaN(NaN));
 console.log(isNaN(Number.NaN));
 console.log(Number.isNaN(NaN));*/

/*let x=5;
let y=5;
//console.log("is both the x and y are equal or not" + x==y ); wrongmethod( it will give wrong answer )
 
console.log('is both the x and y are equal or not: ${x==y}'); //right method */



/*console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);
console.log("Remainder operator" + "  " + 81%8);*/
/*let x= 20;
//let newX = x++;

//console.log(newX);

let oldX = ++x;
console.log(x);
console.log(oldX);*/

/*var num=20;
var numNew= --num;
console.log(num);
console.log(numNew);
console.log(num);
console.log(numNew);*/

/*var a=20;
var b=10;

//equal(==)
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);*/
/*var a=10;
var b=-20;
console.log(a>b && b>0);
console.log(a<b || b<0);
console.log(!((a>b)||(b<0)|| (b<a) || (a>0)));*/


//string operator

/*var firstName= "sahil";
console.log(firstName + " shrivastava");*/

/*console.log(3**3); // oprand where 2nd 3 is power
var num = 3;
console.log( num + " sahil");*/

// if raining = raincoat
// else no raincoat

/*var tmw = 'rain';
var tmw = 'sunny';
 if(tmw == 'rain'){
    console.log('take a raincoat');
 }else if ( tmw== 'sunny'){
    console.log('no need to take raincoat');
 }else{
    
 }*/

//4>. what is truthy and falsy values in javaScript?
// ref :- we have total 5 falsy values in javaScript
//0,"", undefine,null,NaN,fasle** is false anyway

/*if(score =NaN){
   console.log("OMG, we loss the game");
  }else{
     console.log("yay,we won the game");
  }*/

// ternary operator
// var age=24;
// console.log((age>=18)?"Egligible for vote":"Not egligible for vote");




//Switch Statement

// let area = "square";
// var l = 12, b = 24, r = 4, PI = 3.142;
// switch (area) {
//    case 'circle':
//       console.log("the area of the circle is : " + PI * r ** 2);
//    case 'triangle':
//       console.log("the area of triangle is : " + (l * b) / 2);
//       break;
//    case 'reactangle':
//       console.log("the area of reactangle is :" + (l * b));
//       break;
//    case 'square':
//       console.log("the area of square is : " + (l * l));
//       break;
//    default:
//       console.log("please enter valid data");

// }

// while loop

// let num=0;
// //block scope
// while(num <=10){
//    console.log(num);
//    num++;

// }

//do-while-loop

// let i=20;
// do{
//    console.log(i);
// i++;
// }while(i<=10 );

//for loop
// let i;
// for(i=5; i<=10; i++){
//    console.log(i);
// }

//function defination

//  function sum(){
//    let a=10,b=20;
//    let total = a+b;   
//     console.log(total);
//  }
//  sum();


//function expression
// function sum(a, b) {
//    let total = a + b;
//    console.log(total);
//  }
//  sum(52, 86);

//  var funExp = sum(5, 2);
//  funExp;

//return keyword
// function sum(a, b) {
//    return total = a + b;
// }
// let joro = sum(22, 44);
// console.log( "jor "+joro);

//anonymous function
// let joro = function(a,b){
//    return total = a+b;
// }
// let sum1 = joro(56345,6456);
// let sum2= joro(346789,478);
// console.log(sum1> sum2);


////////////////////////////////////Features of ECMAScript 2015 also known as ES6//////////////////////////////////////////////////////

// LET VS CONST VS VAR

//  var myName = "Mars Sand";
//  console.log(myName);
//  myName = "Sahil Shrivastava";
//  console.log(myName);

// let myName = "Mars Sand";
//  console.log(myName);
//  myName = "Sahil Shrivastava";
//  console.log(myName);


// 1. let & const are mostly use in function

// const myName = "Mars Sand"; 
//  console.log(myName);
//  myName = "Sahil Shrivastava";
//  console.log(myName);

//var ==> Function scope

// function biodata(){
//    var myFirstName = "Mars";
//    console.log(myFirstName);


//    if(true){ 
//    var myLastName = "Sand";
// console.log('inner'+ myLastName);
// console.log('inner'+ myFirstName);

// }
// console.log('innerOutter'+ myLastName);
// }
// biodata();


// let and const ==> Block Scope
// {block} only block item can give output in veriable using in and out.
//  function biodata(){
//    let myFirstName = "Mars";
//    console.log(myFirstName);


//    if(true){ 
//    let myLastName = "Sand";
// console.log('inner'+ myLastName);
// console.log('inner'+ myFirstName);

// }
// console.log('innerOutter'+ myLastName);
// }
// biodata(); ////output will not give result of out of the block program



////////////////////////////////////////////////////////////////////////2.Template literals (Template Strings) adding of string


// JavaScript Program to Print table for given number (8)


// for(let i=1; i<=10; i++){
//    let tableOf = 12;
//    console.log(`${tableOf} * ${i} = ${tableOf*i}`);
// }

//3. Default Parameters
// Default function parameters allow named parameters to be 
//intialized with default values if no value or undefined is passed


// function multiply(a,b){
//    //give functionality here only
// return a*b;
// }
// console.log(multiply(5,2));
// console.log(multiply(1)); // this console give NaN

// 4. Fat Arrow function 
// Normal function way of writing function



// function sum (){
//    let a=5; b=6;
//    let sum =a+b;
// return `The sum of the two number is ${sum}`;
// }console.log(sum());


// How to convert in into Fat Arrow Function

// const sum = (a, b) => { // we also use default parameter here
//    return `The sum of the two number is ${a+b}`;}
// console.log(sum(5, 6));

// when we have only one line code then we do not need add return and {}

//  const sum =(a,b)=> `The sum of the two number is ${a+b}`; console.log(sum(5,6));




////////////////////////////////////////////ARRAYS IN JAVASCRIPT/////////////////////////////////////

// WHEN WE FEEL LIKE STORING MULTIPLE VALUES IN ONE VARIABLE THEN 
//INSTEAD OF VAR, WE WILL USE AN ARRAY.
//In JavaScript , we have an array class , and 
//array arer the prototype of this class.

//example

///var myFriend = new Array; // not mandatory 
// var myFriends =['ramesh' ,22,male,'arjun',20,male,'vishal',true,52];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 1. Traversal in array
//navigate through an array

// if we want to get the single data at a time and also 
//if we want to change the data


// var myFriends =['ramesh' ,'sahil','arjun','vishal'];
// console.log(myFriends[3]);

//if we want to check the length of elements of an array
// console.log(myFriends.length-1);
// console.log(myFriends.length);
// console.log(myFriends[myFriends.length-4]);


// (A).> we use for loop to navigate
//  for (var i=0; i<myFriends.length; i++ ){
//    console.log( myFriends[i]);
//  }



// after ES6 we have for ..in and for..of loop too
// (b).> for ..in example
//  var myFriends =['ramesh' ,'sahil','arjun','vishal'];
//  for (let elements in myFriends){
//    console.log( myFriends[elements]);
//  }



// (c).> for ..of example
//  var myFriends =['ramesh' ,'sahil','arjun','vishal'];
//  for( let elements in myFriends){    console.log(elements);
//  }



// (d).>Array.Prototype.forEach()
//calls a function for each element in the array
//  var myFriends =['ramesh' ,'sahil','arjun','vishal'];
//  myFriends.forEach(function(element,index,array) {
//      console.log(element + "index :" + index + "  "+ array); 
 //here we can access all of three element  index and in which array it getting  out
//  });



// same example with diffrent approach
// fat arrow function
// var myFriends = ['ramesh', 'sahil', 'arjun', 'vishal'];
// myFriends.forEach((element, index, array) => {
//    console.log(element + "index :" + index + "  " + array);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////2.>  Searching and filter in an Array
// (a).>Array.prototype.indexOf()
//Returns the first (least) index of an element within the array equal to 
//an element , or -1 if none is found . it search the element from the first to last index
// oth index number

// var myFriends = ['ramesh', 'sahil', 'arjun', 'vishal','sahil'];
// console.log(myFriends.indexOf('sahil', 2));
// console.log(myFriends.indexOf('Sahil', 0)); /// it give -1 index value because this method is case sensetive



//(b).>Array.prototype.lastIndexOf()
//Returns the last (greatest) index of an elementwithin the array equal
// to an element, or -1 if none is found. It search the element last to first

// var myFriends = ['ramesh', 'sahil', 'arjun', 'vishal','sahil'];
// console.log(myFriends.lastIndexOf("sahil"));

//(c).>Array.Prototype.includes()
//Determines whether the array contains a value,
//returning true or false as appropiate.      

//isse hum log ko bass hai ki nhi yhe 
//pta chlega in terms of true false

// var myFriends = ['ramesh', 'sahil', 'arjun', 'vishal'];
// console.log(myFriends.includes("sahil",4));
// console.log(myFriends.includes("jahil"));

//(d).> Array .Prototype.find()
//arr.find(callback(elemet[,index[, array]])[, thisArg])
//Returns the found element in the array , if some element in the 
//array satisfies the testing function, or undefine if not found .
//only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];
// //price<500
//  const findElement = prices.find((currentValue)=>{
//    return currentValue<500;
// });
// console.log(findElement);

// (e).>Array.prototype.findIndex()
//Returns the found index in the array , if an element in the 
// array satisfies the testing function, or -1 if not found.

// const prices = [200,300,350,400,450,500,600];
// console.log( prices.findIndex((currentValue)=>500));
   

//(f).> Array.prototype.filter()/////////////////////////////////////verry important////////////////////
// Returns a new array containing all elements of the calling
//array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];
// //price < 400

// const newPrice = prices.filter( (elem,index)=>{
//    return elem < 400;
// })
// console.log(newPrice);

////////////////////////////////////////////////////////////////////////3.>sort and compare an array

// Array.prototype.sorts the elements of an array in place and 
//Returns the sorted array. The default sort order is ascending, built
//upon converting  the elements into strings,
//then comparing their sequence of UTF-16 code units values.


// const month =["august","november","december","march","may","june",];
// console.log(month.sort());


// const salary =[12414,12414,364,6,3473,536,7];
// console.log(salary.sort());

// however, if numbers are sorted as strings,
//"25" is bigger than "100", because "2" is bigger than "1".
//because of this , the sort method will produce an incorrect 
// result when sorting numbers.



///////////////////////////////////////////////////////////////////Array Subsection 4Perform CURD////////////////////////////////////////////

//(a).>Array.prototype.push()
//the push()method adds one or more elements to the 
//end of  an array and returns the newlength of the array.


// const animals=['pigs','goats','sheep'];
//  const count= animals.push('chicken','cats','cow');
// console.log(animals);
// console.log(`total types of pet ${count}`);


//(b).>Array.prototype.unshift()
//the unshift() method adds one or more elements to the 
//beginning of an array and returns the new length of the array

// const animals=['pigs','goats','sheep'];
// const count = animals.unshift('chicken','cow','cats');
// console.log(animals);
// console.log(` the type of animal in farm ${count}`);

//2 example
// const number =[1,2,3,5,7];
// console.log(number.unshift(4,6));
// console.log(number);

//(c).>Array.prototype.pop()
//the pop() method removes the last element from an array and returns
//that element. this method cheanges the length of the array.

//  const plants=['broccoli','cauliflower','Kale','tomato','cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


//(d).>Array.prototype.shift()
// The shift() method removes the first element from an array and returns
//that removed element. this method change the lenghth of the array.

// const plants=['broccoli','cauliflower','Kale','tomato','cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


//(e).> Array.prototype.splice()
//add and /or removes elements from an array.
// this method return deleted array.or empty array

//questions


// add item in last
//  plants.splice(plants.length,0,'pea'); 
// console.log(plants);


// update item in array

 //const updatePlant = plants.splice(0,1,'Broccoli');////for first index

//  const updatePlant2 = plants.splice(1,1,'fulkobi');
//  console.log(plants);

// delete kale in array
//  plants.splice(2,1);
//  console.log(plants);

///////////////////////////////////Array subsection  Map and Reduce Method//////////////////////////////////////////
//(A).>>>Array.prototype.map()
//let newArray = arr.map(callback(currentvalue[,index[,array]])
//return element for new Array, after executing something}[, thisarg]);
//Return a new array contaning the results of calling a
//function on every element in this array.

//const array1 = [1,4,9,16,25];

//it return new array without mutating the orignal array
// const array1 = [1,4,9,16,25];

//  Example 1.> (num>9)
// let newArr =array1.map((curElem,index,arr)=>{
//    return curElem>9;
// })
// console.log(array1);
// console.log(newArr);

// Example 2.> 
// const array1 = [1,4,9,16,25];
// let newArr = array1.map((curElm,index,arr)=>{
//    return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
// })
// console.log(newArr);
// we cain use chaining too see in interview question code line 152

// ***********************************************it is just like forEach***************************************                             

// (B).> //////////////////////////////////////////////REDUCE METHOD ///////////////////////////////////////////////
// flatten an array means to convert the (3d) or (2d) array into a 
// single dimensional array

//THe reduce() method executes a reducer function (that you provide)
// on each Element of the Array, resulting in single output value.

//The reducer function takes four arguments:
//Accumulator
//Current Value
//Current Index
//Source Array

// example
// // let arr = [100,200,300,400,500];
//  let sum = arr.reduce((accumulator,currElm,index,arr)=>
//  {  
//        return accumulator += currElm;
//  })
//  console.log(sum);

//example  adding default value
//   let arr = [100,200,300,400,500];
//   let sum = arr.reduce((accumulator,currElm,index,arr)=>
//   {  
//         return accumulator += currElm;
//   },7)// intial value
//   console.log(sum);


// How to fatten an array
//converting 2d and 3d array into one dimensional array

// const arr = [['zone1','zone2'],
//              ['zone3','zone4'],
//              ['zone5','zone6'],
//              ['zone7','zone8']];

//              let flattenArr = arr.reduce((accu,curElm)=>{
//                return accu.concat(curElm);
//              })
//              console.log(flattenArr);

//example by me sum of 2d array
//  const arr = [[525,343],
//              [785,346],
//              [224,869],
//              [969,768]];

//              let flattenArr = arr.reduce((accu,curElm)=> accu.concat(curElm)).reduce((accu,curElm)=>{
//                return accu += curElm;
//              });
//              console.log(flattenArr);
   
//example by me sum of 3d array
//sol
// const arr = [[[525,343],
//              [785,346],
//              [224,869],
//              [969,768]],
//              [[465,213],
//              [423,386],
//              [244,879],
//              [999,168]]];
//              let flattenArr = arr.reduce((accu,curElm)=> accu.concat(curElm)).reduce((accu,curElm)=> accu.concat(curElm)).reduce((accu,curElm)=>{
//                                return accu += curElm;
//                           });
//                            console.log(flattenArr);

/////////////////////////////////////////////////// section 7.> String in javaScript////////////////////////////////////////////////

//A javaScript String is zero or more characters written inside quotes.
//you can use single or double quotes
//Strings can be created as primitives,
//from string literals, or as objects ,using the String() constructor


// let myName ="sahil shrivastava";
// let myChannelName = 'mars sand';
// //let ytName = new String ("Bihari bIker") ///// this very worng way 
// console.log(myName);
// console.log(myChannelName);
// console.log(ytName);

// example
// How to find the length of string
//string.prototype.length
//Reflects the length of the string.

// let myName = "sahilshrivastava"
// console.log(myName.length);

///////////////////////////////////////////////[a.]Escape character
// type of use of back slash and double quote andsingle quote 
// let anySentence = "I am the so-called \"Mars Sand\" from the kolkata.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate qoutes
// let nySentence = 'I am the so-called "Mars Sand" from the kolkata.';
// console.log(anySentence);

// let ySentence = "I am the so-called 'Mars Sand' from the kolkata.";
// console.log(anySentence);



////////////////////////////////////////////[b.]Finding a String in a String

//String.prototype.indexOf(searchValue [, fromIndex])
// he indexOf() method returns the index of (the position of ) the first
// occurence of a specified text in a string

// const myBioData = 'I am the sahil shrivastava';
// console.log(myBioData.indexOf("s",14)); ////it check after 14 
// console.log(myBioData.lastIndexOf("s",14));///it check before 14

/////////////////////////////////////////////[c.]Searching for a String in a String

//String.prototype.search(regexp)
// The Search() method searches a string for a specified
// value and returns the position of the match
// const myBioData= 'I am the sahil shrivastava';

// let searchData = myBioData.search("sahil");
// console.log(searchData
// );
//the search() method cannot take a second start position argument.

/////////////////////////////////////////////////////////[D.]Extracting String Parts
// there are 3 methods for extracting part of a string:

//slice(start,end)
//substring(start,end)
//substr(start,length)

//(a.)The slice() Method 
//slice() extracts a part of a string and returns the extracted part
//in a new string.

//The method takes 2 parameters: the start position,
//and the end position (end not included).

// var str= "Apple, Bananaa, Kiwi"
//console.log( str.slice(0,4));
// console.log(str.slice(7,-2));// yha par(-2) k karn last
// ka do item ko hta kr index count krta h mtlb 7 se suru hoga 

//The slice() method selects the elements starting at the given 
//start argument, and end at, but does not inclue,
//the given end argument.The

//Note: The Orignal array will not be changed.
//Remember : JavaScript counts positions from zero . First position is 0.
   



//(B.)The SubString() Method 
//SubString() is similar to slice().
//The diffrence is that subString() cannot accept negative index

// var str= "Apple, Bananaa, Kiwi"

// let newStr=str.substring(0,50);
// console.log(newStr);

// if we give negative value then the characters are counted from the 0th pos


//(c.) The subStr() method
//subStr() is similar to slice().
//The diffrence is that the second parameter specifies the 
//length of the exracted part.


// var str = "Apple, Bananaa, Kiwi"
// let res = str.substr(0,4);
// let ges = str.substr(7,);///no negative value add no return
// let fes = str.substr(-10);
// console.log(fes);


//////////////////////////////////////////////////////////[e.] Replacing String Content()
//String.prototype.replace(searchFor, replaceWith)
//The replace() method replace a specified value 
//with another value in a string.

// let myBioData = `I am vinod bahadur thapa vinod `;
// let repalceData = myBioData.replace("vinod","Sahil")
// console.log(repalceData);

//Points to remember
//1: The replace() method does not change the string
//it is called on it returns a new string 
//2:by default, the replace() method replace only
//the first match
//3. by default , the replace() method is case sensitive.
//Writing Sahil (with upper case) will not work


/////////////////////////////////////////////////[f.] Extracting String Characters

// there are 3 methods for extracting String characters:

//charAt(position)
//Property acces []

//The charAt() Method  
//The charAT() method returns the character at a
//specified index (position) in a string 

// let str = "HELLO WORLD";
// console.log(str.charAt(6));

//charCodeAt(position)

// The charCodeAt() Method 
//The charCodeAt()  method returns the unicode of 
//character at a specified index in a string:
// The method retruns a UTF-16 code
//(an integer between 0 and 65535).


// let str = "HELLO WORLD";
// console.log(str.charCodeAt(0)); // return UTF-16 code

//NOte : The Unicode Standard provides a unique number for every 
//character , no matter the platform , device , application,
//or language. UTF-8 is a popular Unicode encoding which has 88-bit code units.


//Property Access
//ECMAScript 5 (2009) allows property access [ ] on strings

// var str ="Hello World";
// console.log(str[10]);

// Other useFul methods

// var str ="Hello World";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());//these are method


// The concat() Method 
// concat() joins two or  more strings

//  let fName ="sahil"
//  let lName ="shrivastava"
// console.log(fName.concat(lName));
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(" ",lName));  ///////string ko jorne ka method 

//String.trim()
//The trim() method removes whitespace from both sides of a string 

// var str ="           Hello WOrld!        ";// it is not remove between space
// console.log(str.trim());


//Convertinga String to an Array
//A String can be converted to an array with the ///////////////important for interview
//split() method


// var txt = "a,b,c,d,e";     //String 

//console.log(txt.split(" , "));   //split on commas
//console.log(txt.split("  "));    //Split on spaces
// console.log(txt.split(" | "));   //Split on pipe





//////////////////////////////////////////////Section 8 - Date And Time inJAvaScript//////////////////////////////////////////


//JavaScript Date objects represent a single moment in time in a 
//platform - independent format . Date objects contain a Number
//that represents millisseconds since 1 janurary 1970 UTC


//Create Date Objects 
// There are 4 ways to Create a new date object:


// new Date ()
// new Date (year,month,day,hours,minute,seconds,milliseconds)
// // it takes 7 arguments
// new Date (milliseconds)
// // we cannot avoid month section
// new Date(date string)

//new Date()
//Date objects are created with the new Date() constructer

//let currDate = new Date();
// console.log(currDate); /// return-----2024-01-11T11:54:13.519Z  GreenWitch mean Time 

//  console.log(new Date());
//  console.log(new Date().toLocaleString());   //return perfect time--11/1/2024, 5:28:29 pm
//  console.log(new Date().toString());//give with time zone Thu Jan 11 2024 17:29:02 GMT+0530 (India Standard Time)

 //Date.now()
 //Returns the numeric value corresponding to the current time-the number 
 //of milliseconds elapsed since January 1, 1970 00:00:00 UTC

 //console.log(Date.now());

 //new Date (year,month,...)
// 7 numbers  specify year, month, day, hour, minute, second, and milliseconds
//(in that order)
//Note: JavaScript counts months from 0 to 11.
//January is 0 and December is 11.

// var d = new Date(2000,11,17,3,39,30,0);  // here we have to put complete argument to get date 
// console.log(d.toLocaleString());// otherwise  if we left it blank then it return current data
 // if we do not complete argument then it show js inital time 1970         

//new Date(dateString)
//new Date(datestring) creates a new date object from a date string

//var d = new Date ("October 13, 2014 11:13:00");
//console.log(d);

// new Date(milliseconds)
// new Date(milliseconds) create a new date object as zero time plus millisecond

//  var d = new Date(0);
// //var d = new Date(1704990706457);
// var d = new Date(8640000000000*2);
// console.log(d.toLocaleString());
///////////////////////////////////////////////////
// Date Method                                    /
//  const currDate = new Date();                  /
// // how to get the indivisual date              /
// console.log(currDate.toLocaleString());        /
// console.log(currDate.getFullYear());           / 
// console.log(currDate.getMonth());              /
// console.log(currDate.getDate());               /
// console.log(currDate.getDay());                /
                                                  //       
// // how to set the indivisual date              /
// console.log(currDate.toLocaleString());        / 
// console.log(currDate.setFullYear(2024));       /
// console.log(currDate.setMonth(0));             /
// console.log(currDate.setDate(11));             /
                                                  
//Time Methods                                    /
// const curTime = new Date();                     
//                                                  //
// // how to get indivisual time
// console.log(curTime.getTime());
// // // the getTime() method returns the number of
// // milliseconds 
// // since january 1, 1970
//  console.log(curTime.getHours());  
//  // // The getHours() method returns the hours of a date as a number (0-23)         
//  console.log(curTime.getMinutes());              
//  console.log(curTime.getSeconds());           
//  console.log(curTime.getMilliseconds());

//how to set indivisual time 
// const curTime = new Date();

// console.log(curTime.setHours(11));
// console.log(curTime.setMinutes(30));              
// console.log(curTime.setSeconds(30));           
// console.log(curTime.setMilliseconds(0));


// const calender = new Date();
// console.log(calender.getUTCDate());

// new Date().toLocaleTimeString(); // it display current time only

// new Date().toLocaleDateString(); // it display current date only

// new Date().toLocaleString(); // it display current date and time only 




/// Section 09 Math Object in JavaScript //

// the JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI);
//Math.round()
//returns the value of x rounded to its nearest integer

// let num = 10.499;
// console.log(Math.round(num));  // it will return round of value 10.449 is 10 and 10.501 is 11. 

//Math.pow()
//Maths.pow(x,y) returns the value of x to the power of  y

// console.log(Maths.pow(2,3)); out put is 8
//console.log(2**3);

// Math.sqrt()
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(454344));

//Math.abs()
//Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
//console.log(Math.abs(55-100));

//Math.ceil()
//Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.44)) 
// console.log(Math.round(4.44));
// console.log(Math.ceil(99.51));
// console.log(Math.round(99.51));

//Math.floor()
//Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.44)) 
// console.log(Math.round(4.44));
// console.log(Math.floor(99.51));
// console.log(Math.round(99.51));

// Math.min()
//Math.in() cam be used to find the lowest value in a list of argument
// console.log(Math.min(0,150,30,20,-8,-200));

//Math.max()
//Math.max() can be used to find the highest value in  list of argument 
// console.log(Math.max(0,150,30,20,-8,-200));


// vip
//Math.random()
//Math.random() returns a random number between 0(inclusive), and 1
// console.log(Math.random());
//  console.log( Math.round(Math.random()*10)); for random integer

//Math.trunc()
// The trunch() method returns the integer part of a number.

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));
// console.log(Math.abs(Math.trunc(-99.1)));

////////////////////////////////////////////////// Section 10 Document Object Model in JavaScript  [DOM]  ////////////////////////
//1>.Window is the main container or we can say the 
//global Object and any operations related to entire
// browser window can be apart of window object.

//for ex the history or to find the url etc.

//[1.] whereas the DOM is the child of Window Object

//[2.] All member like objects, methods or propertirs.
// if they are the part of window object then we do not refer
// the window object . Since  window is the global object
// so you  do not have to write down window .
//-It will be figured out by the runtime.              

/////////////////////DOM
////// the DOM is the Document Object Model , which deals with the document,
//the HTML elements themeselves , e.g. document and all traversal you 
//would do in it , events , etc.

//For Ex:
//change the background colour to red 
//document.body.style.background ="red";
///////////////////////BOM
//The BOM is the Browser Object Model , WHich deals with browsr components
//aside from the document, like history , location, navigator and screen
//(as well as some others that vary by browser). Or
//In simple meaning all the window operations which comes under BOM are performed
//using BOM


// let's see more practical on history object
//Functions alert/confirm/prompt are also a part of BOM:
//they are directly not related to the document,
//but represent pure browser methods of communicating with the user.

// alert(location.herf); // shows current URL
// if(confirm("Want to Visit ThapaTechnical?")){
//    location.herf ="";//redirect the broe=wser to another

// }

// Section ://////////////////////////////////// Naviagte through the DOM

//1: document.documentElement
//--------returns  the Element that is the root element of the document.
//2: document.head
//3: document.body
//4: document.body.childNodes (includes tab ,enter and whiteSpace)
//--------list of the direct children only
//5: document.children(without text nodes ,only regular Elements)
//6: documents.childNodes.lenghth


// Practice time 
// How to find the child in DOM tree
//firstChild vs firstElementChild
//lastChild vs firstElementChild
//const data = document.body.firstElementChild;
//undefined
//data
//data.firstElementChild
//data.firstElementChild.firstElementChild
//data.firstElementChild.firstElementChild.style.color ="red"

//How to find the Parent in DOM tree
//data.body.Parentnode // return <HTML>

//How to find of access the siblings
//document.body.nextSibling
//document.body.nextElementSibling
//document.body.previousSibling
//document.body.previousElementSibling


//Section 4 : How to search the Elements And the Refrences 
//we will see the new file

//document.getElementById()
//document.getElementByname()
//document.getElementByClassName()
//document.getElementByTagName()

//special
// now the same we have is the query selectors
// querySelector returns the first matching value whereas
// querySelectorAll() will return all the elements
// document.querySelector('#heading').innerHTML = "I CHANGED AGAIN ";


//*********************************************************************************************************** */

//::::::::::::::::Section- 11 Events in javaScript::::::::::::::::\\

//HTML events are "things" that happent o HTML elements.
//When JavaScript is used in HTML pages, JavaScript can "react" on these events.


//Html Events 
// An HTMl event can be some thing the browser does, or something a user does.
//here are some examples of HTML events:

//An HTML WEb page has finished loading
//An HTML input field was changed
//AN HTML button was clicked
//Often , When events happen. you may want to do something.

//JavaScript lets you executes code when events are detected.
//HMTL allows event handler attributes, with JavaScript code , to be added to HTML element



// section 1.> 4 Ways of writing Events in JavaScript
//1: using inline events alert();
//2:by Calling a function (we already seen and most common way of writing)
//3: using Inline events (Html onClick=" property and element.onClick")
//4: using Event Listeners (addEventListener and IE's attachEvent)

//check the Events type in drive: D HTML file

// section 2.> What is Event Object?
// Event object is the parent of the event object.
//for example 
//MouseEvent, focus ,KeyboardEvent etc

// section 3.> what is MouseEvent in javaScript 
//The MouseEvent Object
//Events thatt occur WHen the mouse Interacts with the HTML
//document belongs to the MouseEvent Object.


// section 4.> KeyboardEvent in JavaScript
//Event that occur when user presses a key on the keyboard,
//belongs to the keboardEvent Object.

//section 5. InputEvent in JavaScript
//The onchange event occcurs when the value of an element has been changes.

//For radiobuttons and checkboxex, the onchange event occurs when the
//checked state has been changed


//***************************************************************************************************************************************** */
// JavaScript timing events
// the window object allows execution of code at specified time intervals.
//these time intervals are called timing events.
//the two key methods to use with JavaScript are:

//setTimeout(function,milliseconds)
//Executes a function , after waiting a specified number of milliseconds.

//setInterval(function,milliseconds)
//same as setTimeout(), but repeats the execution of the function continiously

//1. setTimeout()
//2. clearTimeout()
//3. setInterval()
//4. clearInterval()

//*********************************************************************************************************************************************************
////////////////////////////////////////////////OBJECT ORIENTED JAVASCRIPT???????????????????????????????????????????????????????????????????????????????

// what is object literals?
//object literals is simply a key:value pair data structure.
//storing variables and functions together in one container,
//we can refer this as an objects.
// object is like school bag


// 1st way 
// let bioData ={
//    name:"sahil shrivastava", //name is key here and sahil is value
//    age:24,
//    getData :function(){     //now function is called as method because it is in object
//       console.log(`my name is ${bioData.name} and my age is ${bioData.age}`);
//    }

// }
// console.log(bioData.name);
// bioData.getData();

// 2nd way (no need to write functtion as well after ES6)
// let bioData ={
//    name:"sahil shrivastava", //name is key here and sahil is value
//    age:24,
//    getData (){     //here we don't  write :function to make method
//       console.log(`my name is ${bioData.name} and my age is ${bioData.age}`);
//    }

// }
// console.log(bioData.name);
// bioData.getData();


// what if we want object as a value inside an object

// let bioData ={
//    name:{
//       firstName:"sahil",
//       lastName:"shrivastava", 
//    },
//    age:24,
//    getData :function(){     //now function is called as method because it is in object
//       console.log(`my name is ${bioData.name} and my age is ${bioData.age}`);
//    }

// }
// console.log(bioData.name.firstName);
// console.log(bioData.name.lastName);
// bioData.getData();


// 2.> what is {this object}?
//The definition of "this" object is that it contain the current context.
//The this object canhave diffrent values depending on where it is placed.

// // For Example 1
//console.log(this);
// //it refers to the current context and that is window global object

// //ex 2
//  function myName(){
//    console.log(this);

// }
// myName();

// // ex 3
//  var myNames = 'vinod';
//  function myName(){
//    console.log(this.myNames);// jab  hum log {this ko object k bahr 
                                //use krenge to global context rhega}
// }
// myName();

// // ex4
// const obj ={
//    myAge : 26,
//    myName(){
//       console.log(this.myAge); //{jab hum log this ka use object k andr krenge 
//                                //tab wo object ko context me lega}
//    }
// }
// obj.myName();

// // ex 5
// // this object will not work with arrow function bcz arrrow

// const obj ={
//   myAge:26,
//   myName:()=>{
//        console.log(this);
//}   
//}
//obj.myName();

// 4.> Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects , into distinct variables.

   // Array Destructuring
   
//    const myBioData = ['sahil', 'mars', 26];
 

//    // let myFName = myBioData[0];
//    // let myLName = myBioData[1];
//    // let myAge = myBioData[2];
//    // console.log(myAge);
// // let [myFName,myLName,myAge] = myBioData;
// // console.log(`${myFName},${myLName},${myAge}`);
// let [myFName,myLName,myAge,myDegree="B-Tech"] = myBioData;
// console.log(`${myFName},${myLName},${myAge} ${myDegree}`);


//// Object Destructuring

// let myBioData ={
//    name:"sahil",
//    channel:"mars sand",
//    degree : "B-tech",
//    age: 24
// }
//  let {name,channel,age,degree} = myBioData;
//  console.log(`${name},${age} ${degree} ${channel}`);


// 5.> Object properties
// we can now use Dynamic Properties

//-> no need to write key and value ,if both are same

// let myName ="sahil shrivastava"
// let myAge = 26;

//  const myBio ={ 
//    [myName] : "hello how are you?",
//    [20+4]: "is my age"

// }
// console.log(myBio);

//-> no need to write key and value,if both are same

// let myName ="sahil shrivastava"
// let myAge = 26;

//  const myBio ={ 
//   myName : myName,
//    myAge: myAge 
// }

//anotherway of writing {because key and value are same}
// const myBio ={ myName , myAge}
// console.log(myBio);

//7.> Spread Operator
//  const colors =['red','green','blue','white'];

//  const myColors = ['red','green','blue','white','yellow','black'];
//  //2nd time add one more color on top and tell we need to write it again on myColor array too

// const MyFavColors =['purple','brown',...myColors,...colors];
// console.log(MyFavColors);


//  ECMAScript 2016/ES7
// Array.Prototype.includes
//example 
// const colors =['red','green','blue','white'];
//  console.log(colors.includes('red'));//returns true

//  ECMAScript 2017/ES8
//String padding
//Object.values()
//Object.entries()


//(A)-> String PADDING
// const message = "my name is vinod ";
// console.log(message);
// console.log(message.padStart(18));
// console.log(message.padEnd(2));

//(B)-> Object Values

// const person ={name:'sahil',age:24};
// const Person =()=> {
//    console.log(Object.values(person));
//    console.log(Object.entries(person));
// }
// Person();
// OBJECT VALUES ->it returns array from object
// OBJECT ENTRIES -> it returns array from object with key and value both


//ECMAScript 2018

// we can use spread operator in object also 
// const person ={name:'Sahil',age:87,degree:"mcs"};
// const sPerson ={...person,channel:"mars sand"}
// console.log(sPerson);

//ECMAScript 2019
//Array.prototype.{flat,flatMap}
//optional catch binding
//Object.fromEntries()
//String.prototype.{trimStart,trimEnd}
//Symbol.prototype.description
//JSON improvements
//Well-formed JSON.stringfy()
//FUnction.prototype.toString()

//[1]->Array.prototype.{flat,flatMap}
//how to fatten an array
//Converting 2d an 3d array into one dimensional array

// const arr =[
//    ['zone_1','zone_2'],
//    ['zone_3','zone_4'],
//    ['zone_5','zone_6'],
//    ['zone_7','zone_8'],
// ];
//old method
// let flatArr = arr.reduce((accum,currVal) => {
//    return accum.concat(currVal);
// });
// console.log(flatArr);
//new method
// console.log(arr.flat());
// //byDefault it flaten one lavel
// console.log(arr.flat(3));
// // it will flaten 3d array
// console.log(arr.flat(Infinity));

// [2]->Object.fromEntries()
// const person ={name:'sahil',age:24};
// const Person =()=> {

//    const newArr =Object.entries(person);
//    console.log(Object.fromEntries(newArr));// and we again with new object in return

// }
// Person();

//ECMAScript 2020 ES11
// #1:BIGINT
//before update
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n +12n);
// //after update 
// let newNum = 9007199254740991n +12n;
// console.log(newNum);
// console.log(typeof newNum);//return BIGINT

//es2014
// "use strict";
//  let x=3.55;     // if we want to print vlaue of x we have to 
//                 //define first(without let  var const can not define anything)
// console.log(x);
// same we will see in fat arrow function 



//*****************************Advance JavaScript Very Important************************************//

// // 1.> Event Propagation (Event Bubbling and Event Capturing) 
// // check html file
// // 2.> Higher Order Function
// // function which takes another function as an arguments is called HOF
// // wo function jo dusre function ko as an argument accept krta hai use HOF

// //3.> callback Function 
// // function which get passed as an argument to another function is called CBF
// // a callback function is a function that is passed as an argument to 
// // another function , to be "called back at a later time.
// // Jis bhi function ko hum kisi or function ke under as an argument passed
// // krte hai then usko hum callback fun bolte hai. 

// // // we need to create a calculator

// const add = (a,b) =>{     //(1)
//    return a+b;             
// }
// const subs = (a,b) =>{   //(2)
//    return Math.abs(a-b);
// }
// const mult = (a,b) =>{   //(3)
//    return a*b;
// }                        // all the above 1,2,3 are callback function
// const calculator =(num1,num2,operator)=>{ //(4)
//    return operator(num1,num2);      // and the 4th one is the higher order function
// }

// // calculator(4,3,subs);
// console.log(calculator(4,3,subs));

// // I have to do hardcoded for each operator which is bad
// // we will use the callback and the HOF to make it simple to use
// now insted of calling each function indivisually we can call it
// by simply using one function that is calculator

// In the above example ,calculator is the higher-order function,
// which accepts three arguments,the third one being the callback.
// here the calculator is called the Higher Order Function because 
// it takes another function as an argument

// and add ,sub and mult are called the callback function bcz they 
// are passed as an argument to another function


//////////////////////////////////////////Asynchronus JavaScript///////////////////////////////////////

// // [a]. Hoising in JavaScript 
// // we have creation phase and execution phase.
// //Hoisting in JavaScript is a mechanism where variables and functions
// //Declaration are moved to the top of their scope before the code execute.
//---------------------------------------------------------------------------
//For Example 
// console.log(myName);
// var myName;// it return undefine.
// myName ="sahil";
// //how it will be in output during creation phase
// var myName = undefined;
// console.log(myName);
// myName = "sahil";

// How it work in creation phase
// var myName;
// console.log(myName); // then it will return undefine.
// myName="sahil"
//---------------------------------------------------------------------------
// In ES2015 hoisting is avoided by using the let keyword 
// insted of var.(the other diffrence is that variable declared
// with let are local to the surrounding block , not the entire 
// function.)
// console.log(myName);
// let myName; /// it give an error.
// myName ="sahil";
//----------------------------------------------------------------------------
// // [b].Scope Chain and Lexical in JavaScript
// // The scope chain is used to resolve the value of veriable names in JS.
// // Scope chain in js is lexically defined, which means that we can see
// // what the scope chain will be by looking at the code.
// // At the top , we have the Global Scope, which is the window Object
// // in the browser.
// // Lexical Scoping means Now, the inner function can get acess to 
// // their parent function variables But the Vice-versa is not true. 

// for Example 
// let a = "Hello guys.";//global scope
//  const first =()=>{
//    let b = "how are you?"
//    const second =()=>{          // yha pr child function parent function ko use kr rha h
//       let c ="hii,i am fine thank you";
//       console.log(a+b+c);
//    }
//    second();
   
//  }
// first();

//after change
// let a = "Hello guys.";//global scope
//  const first =()=>{
//    let b = "how are you?"
//    const second =()=>{
//       let c ="hii,i am fine thank you";
//       //console.log(a+b+c);    // yha pr parent function can not get the acess of 
//                               // veriable in child class
//    }
//    second();
//    // I can't use c
//    console.log(a+b+c);
//  }
// first();

// // what is Closures in JavaScripts

// // A closure is the combination of a function bunndle together (enclose) with references
// // to its surrounding state (the lexical enviroment).

// // In other words , a clouser gives you
// // acess to an outer function's scope from an inner function.

// // In JavaScrpit ,clouser are created every time a function is created , at function creation time.

// for example 
//it is same as lexical scoping

// exapmle in code 
//  const outerFn=(a)=>{
//    let b=10;
//    const innerFn =()=>{
//       console.log(`THE SUM OF GIVEN NUMBER IN PARENT FUNCTION ${a+b}`);
//    }
//    innerFn();
//  }
// outerFn(5);

// it ia also like lexical scoping now it is closure is created when ever it create.

// another way
// const outerFn=(a)=>{
//    let b=10;
//    const innerFn =()=>{
//       console.log(`THE SUM OF GIVEN NUMBER IN PARENT FUNCTION ${a+b}`);
//    }
//    return innerFn;
//  }
//  let checkClousere = outerFn(5);
//  checkClousere();

//**************************************************************************************************** */
 ///////////////////////////Synchronous function/////////////////////////////////////////

//  const fun2 =()=>{
//       console.log(`this will display function->2`);
//  }
//  const fun1 =()=>{
//    console.log(`this will display 1 for first`);
//    fun2();
//    console.log(`this will display 1 for second time`);
//  }
// fun1();
/////////////////////////////////Asynchrnous function/////////////////////////////////////////

// const fun2 =()=>{
//    setTimeout(()=>{   /// it is an asynchrounus method 
//       console.log(`this will display function->2`);
//    },3000);
//  }
//  const fun1 =()=>{
//    console.log(`this will display 1 for first`);
//    fun2();
//    console.log(`this will display 2 for second time`);
//  }
// fun1();

//Asynchrnous another example
// another example
// const fun2 =()=>{
//       console.log(`this will display function->2`);
//  }
//  const fun1 =()=>{
//    setTimeout(()=>{     /// it is an asynchrounus method 
//       console.log(`this will display 1 for first`);
//       console.log(`this will display 2 for second time`);
//    },4000)
//    fun2();
//  }
// fun1();
//////////////////////////////////////////// Event loop ///////////////////////////////////////
//In JavaScript ,the event loop is a crucial concept that handles asynchronous operations
//and ensures non-blocking behaviour. it is responsible for managing the execution of code,
// handling events, and maintaining a smoth flow in both browser and Node.js enviroment.

// here are some simplified explanantion of how the event loop works:
//1. Call Stack:
// .The JavaScript engine maintains a call stack to keep track of function calls and their
// execution context.
//2. WEb APIs and callback Queue:
// . Asynchronous operation , such as HTTP requests, timers, or user Interactions , are
//   handled by Web APIs (e.g., DOM,XMLHttpRequest in the browser, or timers in Node.js).
// . When an asynchronous operation is initiated, it's moved out of the call stack and is 
//   executed in the background.Meanwhile, the call stack continues to execute
//   synchronous code.
//3. Event loop and callback Queue:
//  .The event loop constantly checks the callback queue for completed asynchronous
//   operations.
//  .if an operation is finished ,its callback function is pushed to the callback queue.
//4. callbackExecution:
//  .when the callstack is empty, the event loop moves callback from the queue to the call
//   stack for execution.
//  .This process continues, allowing asynhronouis operation to integrate seamlessly with the 
//   synchronous code.

/// example with code :
//  console.log("start");
// //Asynchronous operation (simulated using seTimeout)
// setTimeout(()=>{
//    console.log("Async operation completed");
// },3000);
// setTimeout(()=>{
//    console.log("End");// here we see the that syncro and asyncro function within code block.
// },5000);


///////8.>callBack Hell
// setTimeout(()=>{
//    console.log(`1st works is done`);
//    setTimeout(()=>{
//       console.log(`2nd works is done`);
//       setTimeout(()=>{
//          console.log(`3rd works is done`);
//          setTimeout(()=>{
//             console.log(`4th works is done`);
//             setTimeout(()=>{
//                console.log(`5th works is done`);
//                setTimeout(()=>{
//                   console.log(`6th works is done`);
//                   setTimeout(()=>{
//                      console.log(`7th works is done`);
//                   },1000)
//                },1000)
//             },1000)
//          },1000)
//       },1000)
//    },1000)
// },1000)


// Bonus Json
//***************************** */

// JSON.stringify turns a JavaScript object into JSON text and stores that JSON text

// var my_object = {key_1: "some text", key_2:true,key_3:5};

// var object_as_string = JSON.stringify(my_object);
// console.log(object_as_string);
// //{"key_1":"some text","key_2":true,"key_3":5} it will return as JSON (string)
// console.log(my_object);
// // { key_1: 'some text', key_2: true, key_3: 5 } // it is an object
// console.log(typeof(object_as_string));
// //return string

// // // JSON.parse turns a string of JSON text into a JavaScript object,eg:

// var object_as_string_as_object = JSON.parse(object_as_string);
// console.log(object_as_string_as_object);
// //return object --{ key_1: 'some text', key_2: true, key_3: 5 }
// console.log(typeof(object_as_string_as_object));
// // return object

// PROMISES 
// GET API url
// let x = true + true ;
// let y =  x + true;
// console.log(y);
// let x = false + false ;
// let y =  x + false;
// console.log(y);

//true = 1
//false = 0
// 3>.write a program that works out weather if a given year is a leap year or not?

// let year= 1900;
// if(year %4 ===0){ 
//   if(year%100===0){
//     if(year%400===0){
//       console.log("is a leap year ");//true love

//     }else{
//       console.log("not a leap year");//false love
//     }

//   }else{
//     console.log("is a leap year");//false love
//   }

// }else{
//   console.log("not a leap year");//false part
// }



// let x = 10 % 7;
// console.log(x);

// let year= 2023;
// if(year %4 ===0){ 
//    console.log("true");//true love
// }else{
//    console.log("false");
// }



















