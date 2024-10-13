const prompt = require('prompt');
prompt.start();

prompt.get([{
    name: 'firstNumber',
    description: 'Enter value (any number)',
    message: 'Value is empty',
    required: true
}, {
    name: 'secondNumber',
    description: 'Enter power (any number)',
    message: 'Power is empty',
    required: true
}], function (err, result) {
    const powerOfNumber = pow(result.firstNumber, result.secondNumber);
    console.log(powerOfNumber);
})

function pow(value, power) {
    if (Number(value)==0 && Boolean(value)==true) {
        console.log('The value consists only of spaces');
        printError();
        return;
    }
    if (Number(power)==0 && Boolean(power)==true) {
        console.log('The power consists of spaces');
        printError();
        return NaN;
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

