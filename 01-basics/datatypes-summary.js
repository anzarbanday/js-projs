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