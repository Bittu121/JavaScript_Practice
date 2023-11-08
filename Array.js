//-------------------array  part-1-------------------

// const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);//0

// const myHeors = ["shaktiman", "naagraj"]
// console.log(myHeors);//[ 'shaktiman', 'naagraj' ]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);//2


// Array methods
//const myArr = [0, 1, 2, 3, 4, 5]

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);//remove last value of the array

// myArr.unshift(9)
// console.log(myArr); //add value in starting of the array

// myArr.shift()
// console.log(myArr);//[ 1, 2, 3, 4, 5 ] remove 0 from the array

// console.log(myArr.includes(9));//false

// console.log(myArr.indexOf(3));//2

// const newArr = myArr.join()
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
// //joins means add all the elements of an array into a string,
// //seperated by the specified seperator.
// console.log( newArr);////0,1,2,3,4,5 


// slice
// const myArr = [0, 1, 2, 3, 4, 5]
// console.log("A ", myArr);// A  [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);//[ 1, 2 ]  (: range does not include in slice()

//splice
// console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);//[ 1, 2, 3 ]  (: range include in splice()


// console.log("C ", myArr); //C  [ 0, 4, 5 ]
// console.log(myn2);//[ 1, 2, 3 ]


//--------------array  part-2-------------------------
// const marvel_heros = ["thor", "Ironman", "spiderman"]
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman' ]

// const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);//flash


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
/*
[
    'thor',
    'Ironman',
    'spiderman',
    [ 'superman', 'flash', 'batman' ],
    'superman',
    'flash',
    'batman'
  ]
*/


//spread operator
// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/


// console.log(Array.isArray("Hitesh"))//false

// console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]

//console.log(Array.from({name: "hitesh"})) // interesting  //[]  (: interview)


// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]