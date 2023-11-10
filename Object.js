//Object Part-1
// singleton (: jab hm constructor create krte hai tb singleton ek object banta hai literal se nhi banta hai singleton)
//Object.create  (: constructor method)


// object literals
// const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//method-1
//console.log(JsUser.email)

//method-2
//console.log(JsUser["email"])

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello JS user");//Hello JS user
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greeting);//[Function (anonymous)]


// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`); //Hello JS user, Hitesh
// }
// console.log(JsUser.greetingTwo());


//Object Part-2
//const tinderUser = new Object() //singleton object
//console.log(tinderUser); //{} 

// const tinderUser = {} //Non-singleton object


// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);//hitesh


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({}, obj1, obj2, obj4)
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj3 = {...obj1, ...obj2} //most use spread operator 90% use it
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]

//console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]

//console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


//Object Destructuring concept
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }
//course.courseInstructor   Note:- Not clean code

//const {courseInstructor} = course
//console.log(courseInstructor); //hitesh  Note:-clean code

// const {courseInstructor: instructor} = course
// console.log(instructor);//hitesh

//API  Basic Overview
//JSON
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
