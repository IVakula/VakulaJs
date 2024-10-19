let price = Symbol('price');
let minPrice = Symbol('minPrice');
let maxPrice = Symbol('maxPrice');
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн",

    [price]() {
        const values = Object.values(this);
        let totalCostOfServices = 0;
        for (let i = 0; i < values.length; i++) {
            totalCostOfServices += Number(values[i].split(' ')[0]);
        }
        return totalCostOfServices;
    },

    [minPrice]() {
        const values = Object.values(this);
        let minOfPrice = Number(values[0].split(' ')[0]);
        for (let i = 1; i < values.length; i++) {
            const value = Number(values[i].split(' ')[0]);
            if (value < minOfPrice) {
                minOfPrice = value;
            }
        }
        return minOfPrice;
    },

    [maxPrice]() {
        const values = Object.values(this);
        let maxOfPrice = Number(values[0].split(' ')[0]);
        for (let i = 1; i < values.length; i++) {
            const value = Number(values[i].split(' ')[0]);
            if (value > maxOfPrice) {
                maxOfPrice = value;
            }
        }
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