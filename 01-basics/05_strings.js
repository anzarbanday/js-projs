const name = "Anzar"
const repoCount = 50

// console.log(name + repoCount + " Value")             // not a good practice

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Valorant-FPS')
console.log(gameName.__proto__)


console.log(gameName.length)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))

console.log(gameName.indexOf('n'))


const newString = gameName.substring(0, 8)
console.log(newString)


const anotherString = gameName.slice(-4, 4)
console.log(anotherString)


const newStringOne = "   anzar     "
console.log(newStringOne)
console.log(newStringOne.trim())





const url = "https://valorant.com/new%20game"

console.log(url.replace('%20', '-'))


console.log(url.includes('game'))


console.log(gameName.split('-'))                //[ 'Valorant', 'FPS' ]




