
///////////////////////////////////////////////Bigeners type Question//////////////////////////////////////////////////////////


//  1>. swap two numbers
/*let a = 3;
let b = 4;
var c=b; //c=10
b=a; //b=5
a=c; //a=10

console.log( "the swaped value of a is - " + a);
console.log( "the swaped value of b is - " + b);

// 2>. swap two numbers without using third veriable
// this my self logic
let s = 3;
let d = 4;

 s=d-s; // s=1
 d= d-s; // d=3
 s= d+ s; // s=4
 console.log("the swaped value of s is - " + s);
 console.log("the swaped value of d is - " + d);*/


// 3>.write a program that works out weather if a given year is a leap year or not?

// let year= 2020;
// if(year %4 ===0){
//   if(year%100===0){
//     if(year%400===0){
//       console.log("is a leap year ");

//     }else{
//       console.log("not a leap year");
//     }

//   }else{
//     console.log("is a leap year");
//   }

// }else{
//   console.log("not a leap year");
// }


// 5>. JavaScript program to print table for given number(8,9,12,15) using for loop?


// let i;
// for(i=1; i<=10; i++){
//   console.log("8 X "+ i +" = "+ 8*i + "   " +"9 X "+ i +" = "+ 9*i+"  " + "12 X "+ i +" = "+12*i + "   " + "15 X "+ i +" = "+ 15*i  ) ;
// }


//6>.what is diffrence between function Parameter Vs Function Arguments?

// function sum(a,b){////where a and b are  function parameters
//   let total = a+b;   
//    console.log(total);
// }
// sum(144,345);// all the number under bracket are  function Arguments
// sum(667,686);
// sum(829,732);



//7.> how to sort the numbers in the array in ascending (up) and desecending (down) order?

// const array1=[1,30,4,21,100000,99];

// const ascend=array1.sort();
// console.log(array1);



//8.> 1: Add Dec at the end of an array?  /// only using splice
   // 2: what is the return value of splice method?
   // 3: update march to march (Update)?
   // 4: Delete June in array?

//    const months = ['jan','march','april','june','july'];

   //1 answer
// months.splice(5,0,'dec');
// console.log(months);    


 //2 answer 
//  console.log(months.splice(5,0,'dec'));
 ///give an empty array


//4 answer 

// const updateMonth =( months.splice(1,1,"March"));
// console.log(updateMonth);console.log(months);
//-----------------------------------------------------------------------------
//4 answer
//  const months = ['jan','march','april','june','july'];
//   const removeMonth =(months.splice(3,1));
//   console.log(months);



 //Extra part or new method of 3rd question
// const months = ['jan', 'march', 'april', 'june', 'july'];

// const indexOfMonth = months.indexOf('march');

// if (indexOfMonth != -1) {
//     const updateMonth = (months.splice(indexOfMonth, 1, "March"));
//     console.log(months);
// }
// else {
//     console.log(`no such data found`);
// }

//-----------------------------------------------------------------------------
//9.> find the square root of element in array?
//solution1 
// let arr =[25,36,49,64,81];
// arr.forEach(function(element,index,array){
//      console.log(element**0.5);
//  });

//solution2
// let arr =[25,36,49,64,81];
// let arrSqr = arr.map((curElm)=>{
//     return Math.sqrt(curElm);
// })
// console.log(arrSqr);// to get answer in array we use map

//-----------------------------------------------------------------------------
//10. multiply each element by 2 and return only those element which are greater than 10?

//sol.  method 1

//  let aray = [2,3,4,6,8];
// let newArr = aray.map(function(element,index,array){
// const grtElem = (element*2);
//  if (grtElem>10){
//      console.log(grtElem);
//  }else{
//      console.log(`NaN`);
//  }
//  })

//sol. method 2  best one
// let aray = [2,3,4,6,8];
// let newArr = aray.map((curElm,index,array)=>{
//    return (curElm*2);

// }).filter((curElm)=>{
//    return curElm>10
// })
// console.log(newArr);

//-----------------------------------------------------------------------------
//11. multiply each element by 2 and return only those 
//element which are greater than 10 and finally get sum?

//sol
// let aray = [2,3,4,6,8];
// let newArr = aray.map((curElm,)=> curElm * 2)
//                   .filter((curElm)=> curElm >10)
//                   .reduce((accumulator,curElm)=>{ // this chainnmnnnnnable method
//                      return accumulator += curElm;
//                });
//                console.log(newArr);

//-----------------------------------------------------------------------------
//12. sum of 2D array ? (my question )

//sol()

// const arr = [[525,343],
//              [785,346],
//              [224,869],
//              [969,768]];

//              let flattenArr = arr.reduce((accu,curElm)=> accu.concat(curElm)).reduce((accu,curElm)=>{
//                return accu += curElm;
//              });
//              console.log(flattenArr);
//-----------------------------------------------------------------------------
//13. Display only 280 charcters of a string like the one used in twitter?

// let myTweets = `This handout will help you understand how paragraphs 
// are formed how to develop 
// stronger paragraphs and how
//  to completely and clearly
// express your ideas This
//  handout will help you
//  understand how paragraphs
// are formed how to develop
// stronger paragraphs and 
//  how to completely and 
//  clearly express your ideas`
//sol().
// let actualTweet=(myTweets.slice(0,280));
// console.log(actualTweet.length);

//-----------------------------------------------------------------------------
//14. Return the unicode of the last character in a string

//my solution
// let str =" my name is sahil shrivastava i am  a mern stack developer";
// console.log(str.charCodeAt(str.length-1));

//-----------------------------------------------------------------------------
//15. Diffrence between ceil round floor 
//sol
// we explain it by example
// console.log(Math.ceil(4.44)); // it up value which is 5
// console.log(Math.round(4.44)); // it takes round of value according to rule 
// console.log(Math.floor(4.44)); // it down round  of value which is 4

//-----------------------------------------------------------------------------
//16.  what is diiferent between Math.trunch() and Math.floor() and Math.ceil()?

//If the argument is a positive number , Math.trunc() is equivalent to
//Math.floor(), otherwise Math.trunc() is equivalent to math.ceil().
//-----------------------------------------------------------------------------
//17. Diffrence Between getElementById And querySelector?
//sol
// Element = document.getElementById(ID);
//  Returns a Reference to the Element by its ID .
//  If the element with the specified ID is not in the document,
//  it will returns null.-->

//Element = document.querySelector(selector);

//Returns the first element within the document
//that matches the specified group of selectors,
//or null if no matches are found .---->

//code for this question
{/* <body>
<ul>
   <li id ="web-id">PHP</li>
   <li>HTML</li>
   <li class="web">CSS</li>
   <li class="web">JavaScript</li>
   <li class="web">ReactJs</li>
</ul>
<script>
   console.log(document.getElementById('#web-id').innerHTML);
   console.log(document.querySelector('ul li.web').innerHTML);
   console.log(document.querySelector('li.web').innerHTML);
   console.log(document.querySelector('.web').innerHTML);
</script>
</body> */}

// 17.Make a function for generating OTP:
// sol 

// let GenerateOtp =(length)=>{

//    let otp = '';
//    for ( let i=0; i<length; i++){
//       otp += Math.floor(Math.random()*10).toString();
//    }
//    return otp;
// }
// console.log(GenerateOtp(6));

// 18. what is different between incline onclick and eventlistner?
// sol 
// onclick ---here we can see that only one of theme is working which is in last
// EventListner ----here we can see that both of them is wroking in sequence
// for more info check git repo of eventinterview.

//19. what will be the output of 
                              // const obj ={
                              //    myAge : 26,
                              //    myName :()=>{ // this object will not work 
                              //                   //with arrow function bcz arrrow
                              //       console.log(this);
                              //    }
                              // }
                              // obj.myName();
                              //sol --- this {will be in window context}
//20.  what will be output of
   // let bioData = {
   //    myName : {
   //       realName : "sahil shrivastava",
   //       channelName : 'mars sand'
   //    },
   //    //things to remember is that myName is the key and the object is act like value
   //    myAge:26,
   //    getData(){
   //       console.log(`my name channel is ${this.myName.channelName} and my age is ${this.myAge}`);
   //    }
   // }
   // bioData.getData();

   //output will be-- "my name is channel mars sand and my age is 26 "

                  
//21.> Diffrence between higher order function and callback function
//sol
// the higher order function - the function which are Baaap of all
// function or which accept other function as an argument
// the callBack function - the function which are passed as argument 
// in higher order function are known as callback function.
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

//22.> what is diffrence between Synchronous and Asynchronus JavaScript?
// //sol -->
// Synchronous function is function in which all function return one by one continous no delay.
// Asynchrnous function is function in whiich all function retruns at given time.
 ///////////////////////////Synchronous fumction/////////////////////////////////////////

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
//    setTimeout(()=>{
//       console.log(`this will display function->2`);
//    },3000);
//  }
//  const fun1 =()=>{
//    console.log(`this will display 1 for first`);
//    fun2();
//    console.log(`this will display 2 for second time`);
//  }
// fun1();


//23.>what is event loop?
// sol: The event loop constantly checks the callback queue for completed asynchronous
//   operations.

// /// example with code :
// console.log("start");
// //Asynchronous operation (simulated using seTimeout)
// setTimeout(()=>{
//    console.log("Async operation completed");
// },3000);
// setTimeout(()=>{
//    console.log("End");
// },5000);


//24.> Output of sum(5)(3)(8)?

// function sum (num1){
//    //console.log(num1);
//    return function (num2){
//       //console.log(num1,num2);
//       return function(num3){
//          console.log(num1+num2+num3);
//       }
//    }
// }
// sum(5)(3)(8);
// currying method

// const sum =(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
// sum(5)(3)(8);

//25.> How to make code asynchronous without promise?
//  const myName = ()=>{
//    //simulating an asynchronus operation
//    console.log(`sahil`);
//    setTimeout((myAge)=>{
//       console.log(`my age is 24`);// my method
//       // const myAge  ='my age is -24';
//       // callback(myAge);
//       },2000);//simulating a delay of 2 sec
//    }
//  function processAge(myAge){
//    console.log('Processing:',myAge);
//  }
//  //Calling myName with a callback
 
//  myName(processAge);
//  console.log(`this will be logged before the asynchronus opreation complete`);

 // in this example , `myName` simulates an asynchronous operation (like fetching data
 // from an API) and takes a callback function (`processAge`) as an argument. when the 
 //asynchronous operation completes, it calls the provided callback with the result.
 //callback are a basic form of handling asynchronous operations.However , they can
 //lead to callback hell(nested callbacks)in more complex hell(nested callbacks) in 
 //more complex scenarios.Promises and async/await syntax were introduced to 
 //address these issues and provide a more readable and manageable way to work
 //with asynchronous code.


 
 

 











 
