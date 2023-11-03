const name = "bittu"
const repoCount = 50

//console.log(name + repoCount + " Value");

//String Intepolation  
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//using new keyword
const gameName = new String('hitesh-hc-com')
console.log( gameName[0]);//h
console.log(gameName.__proto__);//{} object

//length
console.log(gameName.length); //13

//toUpperCase()
console.log(gameName.toUpperCase()); //HITESH-HC-COM

//charAt()
console.log(gameName.charAt(2)); //t

//indexOf()
console.log(gameName.indexOf('t')); //2

//substring()
const newString = gameName.substring(0, 4)
console.log(newString); //hite

//slice()
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//trim()
const newStringOne = "   hitesh    "
console.log(newStringOne); //  hitesh
console.log(newStringOne.trim());//hitesh

const url = "https://hitesh.com/hitesh%20choudhary"
//replace()
console.log(url.replace('%20', '-')) //https://hitesh.com/hitesh-choudhary

//includes()
console.log(url.includes('sundar'))//false

//split()
console.log(gameName.split('-')); //[ 'hitesh', 'hc', 'com' ]
