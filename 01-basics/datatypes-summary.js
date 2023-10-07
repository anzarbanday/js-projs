// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primitive)

// Arrays, Objects, Functions



const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)

const places = ["bengaluru", "srinagar", "mumbai"]              //Array


//Object
let myObj = {
    name: "Anzar",
    age: 24
}


//Creating a function (data type: object function)

const myFunction = function(){
    console.log("Hello World")
}

myFunction()









// ****************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myWebsite = "anzardotcom"

let anotherName = myWebsite
anotherName = "anzarahmaddotcom"


console.log(anotherName)
console.log(myWebsite)   // original value does not get changed as we get the copy


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "newemail@gmail.com"

console.log(userOne)
console.log(userTwo)  
// original values are also changed as we get the reference

