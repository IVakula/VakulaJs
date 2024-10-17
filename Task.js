
var prompt = require('prompt-sync')();

var number = prompt('Введіть кількість чисел, які будуть згенеровані:');

checkProbabilityTheory(number);

function checkProbabilityTheory(count) {
    if (!count) {
        console.log('Введено порожнє значення');
        printError();
        return;
    }
    if (!count.trim()) {
        console.log('Введене значення складається тільки з пробілів.');
        printError();
        return;
    }
    if (isNaN(Number(count))) {
        console.log('Введене значення не є числом.');
        printError();
        return;
    }
    if (count == 0) {
        console.log('Введене значення дорівнює 0.');
        printError();
        return;
    }

    let evenNumber = 0;
    let oddNumber = 0;

    for (let i = 1; i <= count; i++) {
        let randomNumber = Math.floor(100 + Math.random() * 901);
        if (randomNumber % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        };
    };

    let percentageOfEvenNumbers = Math.round((evenNumber / (evenNumber + oddNumber)) * 100);
    let percentageOfOddNumbers = 100 - percentageOfEvenNumbers;
    let evenOddpercentage = Math.round(evenNumber/oddNumber*100);

    console.log("Кількість сгенерований чисел: " + count);
    console.log("Кількість парних чисел: " + evenNumber);
    console.log("Кількість непарних чисел: " + oddNumber);
    console.log("Відсоток парних чисел: " + percentageOfEvenNumbers + "\%.");
    console.log("Відсоток непарних чисел: " + percentageOfOddNumbers + "\%.");
    console.log("Відсоток непарних чисел до непарних: " + evenOddpercentage + "\%.");

};

function printError() {
    console.log("Розрахувати функцію неможливо.");
}
