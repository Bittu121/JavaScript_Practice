// Dates

// let myDate = new Date()
// console.log(myDate.toString()); //Sun Oct 08 2023 15:03:36 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Sun Oct 08 2023
// console.log(myDate.toLocaleString());//  8/10/2023, 3:03:36 pm
// console.log(typeof myDate);//object (:Interview)

//method-1
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);//2023-01-22T18:30:00.000Z
// console.log(myCreatedDate.toLocaleString());//23/1/2023, 12:00:00 am

//method-2
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate);//2023-01-22T23:33:00.000Z
// console.log(myCreatedDate.toLocaleString());//23/1/2023, 5:03:00 am

//method-3
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate);//2023-01-14T00:00:00.000Z
// console.log(myCreatedDate.toLocaleString());//14/1/2023, 5:30:00 am

//methodd-4
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate);//2023-01-13T18:30:00.000Z
// console.log(myCreatedDate.toLocaleString());//14/1/2023, 12:00:00 am


//methodd-5
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1696758315478  (: milli second value

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.getTime());//1673634600000  (: get value till first january)

// console.log(Math.floor(Date.now()/1000));//1696758315  //convert in second and floor use for remove decimal value

//method-6
let newDate = new Date()
console.log(newDate);//2023-10-08T09:52:10.416Z

console.log(newDate.getMonth() + 1); //10

console.log(newDate.getDay());//0

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

//Note in vscode press ctrl+spacebar