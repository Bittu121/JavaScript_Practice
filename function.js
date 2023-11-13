
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName() //reference


function addTwoNumbers(number1, number2){ //parameters
    console.log(number1 + number2);
}
// const result = addTwoNumbers(3, 5) // arguments   //8
// console.log("Result: ", result);  // Result:undefined


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    
    return number1 + number2
}
// const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result); // Result:  8


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("hitesh")) //hitesh just logged in
//console.log(loginUserMessage()) //sam just logged in
// console.log(loginUserMessage("hitesh"))

//Rest operator
// function calculateCartPrice(...num1){  //example shopping cart add item
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)) //[ 200, 400, 500 ]


// function calculateCartPrice(val1, val2, ...num1){     //example shopping cart add item
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))  //[ 500, 2000 ]


//Object using function
const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) //o/p:-Username is sam and price is 399
//Type Scripts  
handleObject({  
    username: "sam",
    price: 399
})


//Array using function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 400, 500, 1000])); //400
