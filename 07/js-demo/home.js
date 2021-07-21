/*
function logMessage() {
    console.log('Here is a mesagge');
}

logMessage();
logMessage();
*/
/*
let myFunction = function loggingFunction () {
    console.log('Here is a mesagge');
}

myFunction();*/
/*
let myFunction = function (message, firstName) {
    console.log(message);
    console.log(firstName);
}

myFunction();
*/
/*
function getSecretCode(value) {

    let code = value * 42;
    return code;
}
let secretCode = getSecretCode(2);
showMessage( secretCode );
*/
/*
let key = 42;
function getSecretCode(value) {
    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }
    let code = value * keyGenerator();
    console.log('in getSecretCode: ', key);
    return code;
}
let secretCode = getSecretCode(2);
showMessage( secretCode );
*/

changePercentOff( 32 );