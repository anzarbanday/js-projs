const accountId = 8558                      // declaring a constant
let accountEmail = "fakemail@gmail.com"     // declaring a variable
var accountPassword = "123456"              // (variable) prefer not to use var because of issue in block scope and functional scope
accountCity = "Bengaluru"                   // can do this but not a good practice
let accountState;                           // takes the value as undefined

accountEmail = "fakemail@hotmail.com"
accountPassword = "7654321"
accountCity = "Srinagar"


console.table([accountId, accountEmail, accountPassword, accountCity])