let price = Symbol('price');
let minPrice = Symbol('minPrice');
let maxPrice = Symbol('maxPrice');
let toArrayOfValues = Symbol('toArrayOfValues');
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн",

    [toArrayOfValues]() {
        const values = Object.values(this);
        const arrayOfValues = [];
        for (let i = 0; i < values.length; i++) {
            arrayOfValues[i] = Number(values[i].split(' ')[0]);
        }
        return arrayOfValues;
    },

    [price]() {
        const arrayOfValues = this[toArrayOfValues]();
        let totalCostOfServices = 0;
        for (let i = 0; i < arrayOfValues.length; i++) {
            totalCostOfServices += arrayOfValues[i];
        }
        return totalCostOfServices;
    },

    [minPrice]() {
        const arrayOfValues = this[toArrayOfValues]();
        const minOfPrice = Math.min(...arrayOfValues);
        return minOfPrice;
    },

    [maxPrice]() {
        const arrayOfValues = this[toArrayOfValues]();
        const maxOfPrice = Math.max(...arrayOfValues);
        return maxOfPrice;
    }
}


console.log(Object.entries(services));
console.log('Total cost of services is: ' + services[price]());
console.log('The minimum cost of services is: ' + services[minPrice]());
console.log('The maximum cost of services is: ' + services[maxPrice]());
console.log();

services['Розбити скло'] = "200 грн";
console.log(Object.entries(services));
console.log('Total cost of services is: ' + services[price]());
console.log('The minimum cost of services is: ' + services[minPrice]());
console.log('The maximum cost of services is: ' + services[maxPrice]());