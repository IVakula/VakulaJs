const array = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Ivan",
        lastName:"Bek",
        email:"bekIvan@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Ivanov",
        email:"dmitro.ivanov.first@yahoo.com" // Нам такі не підходять
    }
];
let pattern = /^[a-zA-Z0-9]+\.{0,1}[a-zA-Z0-9]+@(gmail\.com|yahoo\.com)/;
//одне або два слова (можуть містити латинські букви, цифри), яке може бути розділене крапкою.

const resultArray = array.filter((element)=>
  pattern.test(element["email"])
);

console.log(resultArray);