
var prompt = require('prompt-sync')();

let value = prompt('Enter value (any number): ');
let power = prompt('Enter power (any number): ');
const result = pow(value, power);
console.log(result);

function pow(value, power) {
    if (!value) {
        console.log('The value is empty');
        return;
    }
    if (!power) {
        console.log('The power is empty');
        return;
    }
    if (Number(value) == 0 && Boolean(value) == true) {
        console.log('The value consists only of spaces');
        printError();
        return;
    }
    if (Number(power) == 0 && Boolean(power) == true) {
        console.log('The power consists of spaces');
        printError();
        return;
    }
    if (isNaN(Number(value))) {
        console.log('The value is not a number');
        printError();
        return NaN;
    }
    if (isNaN(Number(power))) {
        console.log('The power is not a number');
        printError();
        return NaN;
    }

    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= value;
    }
    return result;
}

function printError() {
    console.log('The exponentiation function cannot be calculated');
}

