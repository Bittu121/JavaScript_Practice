"use strict"; //treat all JS code as newer version
//alert(3+3) //we are using nodejs,not browser

//console.log(3+3);console.log("Bittu");


console.log(3+
    3);   //code readability should be high
console.log("Bittu");


//primitive Data type

//number =>2 to 53
//bigint
//string => ""
//boolean =>true/false
//null =>standlone value
//undefined =>
//symbol => find for unique

//Non premitive
//object
//Array

/*
let name = "hitesh"
let age = 18
let islLoggedIn = false
let state;
console.log(typeof "hitesh");
console.log(typeof age);
console.log(typeof null);  //object
*/


//***************Conversion Concept*********
// let score = 33;  
// console.log(typeof score);//number
// console.log(typeof(score));//number


// let score = "33"; 
// console.log(typeof score);//string
// console.log(typeof(score));//string
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //33


// let score = null;
// console.log(typeof score); //object
// console.log(typeof(score)); //object
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //0


// let score = undefined;
// console.log(typeof score); //undefined
// console.log(typeof(score));//undefined
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN


// let score = true;
// console.log(typeof score); //boolean
// console.log(typeof(score));//boolean
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //1


//Note:- "33" => 33
//"33abc" => NaN
//true => 1; false=>0

// let islLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(islLoggedIn)
// console.log(booleanIsLoggedIn);//true

// let islLoggedIn = "";
// let booleanIsLoggedIn = Boolean(islLoggedIn)
// console.log(booleanIsLoggedIn);//false

// let islLoggedIn = "hitesh";
// let booleanIsLoggedIn = Boolean(islLoggedIn)
// console.log(booleanIsLoggedIn);//true

//Note:- 1=>true;
//0 => false
//"" => false
//"hitesh" =>true

// let someNumber = 33
// let stringNumber = String(someNumber);
// console.log(typeof stringNumber);//string
// console.log(stringNumber);//33

//***************Operations*************** 
// let value = 3
// let negValue = -value;
//console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = " hitesh"
// let str3 = str1+str2
// console.log(str3);//hello hitesh
// console.log("1" + 2);//12  //please not good way to write code
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

// console.log(+true); //1
// console.log(true+);//1
// console.log(+"");

// let num1,num2,num3  //Assignment operator
// num1=num2=num3 = 2+2   //not a good way 

// let gameCounter = 100
// gameCounter++;//postfix
// ++gameCounter;//prefix
// console.log(gameCounter); //101   //Note search on google :- prefix js mdn

