//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //Boolean
const outsideTemp = null //null
let userEmail;  //undefined

const id = Symbol('123') //Symbol
const anotherId = Symbol('123')

console.log(id === anotherId); //false beacuse return value is not same
console.log(typeof anotherId); //symbol

// const bigNumber = 3456543576654356754n  //BigInt


// Reference (Non primitive)
// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros);

//Objects
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(myObj);

//Functions
const myFunction = function(){
    console.log("Hello world");
}
console.log(myFunction);

// https://262.ecma-inter   for (: interview

//Note:- JavaScript is a dynamically typed language  (:Interview)


//****************Stack and heap memory**************
//stack(primitive) change only copy not change origional value
let myYoutubeName = "hiteshchoudharydotcom"
let anothername = myYoutubeName
console.log(anothername);//hiteshchoudharydotcom
anothername = "chaiaurcode"
console.log(anothername);//chaiaurcode

//Heap (Non - primitive)  reference

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "bittu@google.com"
console.log(userOne.email); //bittu@google.com
console.log(userTwo.email); //bittu@google.com
